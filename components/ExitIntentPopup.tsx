import React, { useEffect, useRef, useState } from 'react';
import { X, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

const STORAGE_KEY = 'immistack_exit_promo_seen_at';
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

/** Next Monday 00:00 local time — the weekly reset boundary for the offer. */
function nextWeeklyReset(): Date {
  const now = new Date();
  const target = new Date(now);
  const daysUntilMonday = (8 - now.getDay()) % 7 || 7;
  target.setDate(now.getDate() + daysUntilMonday);
  target.setHours(0, 0, 0, 0);
  return target;
}

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function remainingUntil(target: Date): Remaining {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const TimeCell: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-navy text-white font-heading font-bold text-2xl md:text-3xl rounded-lg w-14 md:w-16 py-2 tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{label}</span>
  </div>
);

export const ExitIntentPopup: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const targetRef = useRef<Date>(nextWeeklyReset());
  const triggeredRef = useRef(false);

  // Should we show again? Only if never shown or last shown > 1 week ago.
  const canShow = () => {
    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (!last) return true;
      return Date.now() - Number(last) > ONE_WEEK_MS;
    } catch {
      return true;
    }
  };

  const trigger = () => {
    if (triggeredRef.current || !canShow()) return;
    triggeredRef.current = true;
    targetRef.current = nextWeeklyReset();
    setRemaining(remainingUntil(targetRef.current));
    setVisible(true);
  };

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  // Exit-intent (desktop) + time fallback (covers mobile).
  useEffect(() => {
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };
    document.addEventListener('mouseout', onMouseOut);
    const fallback = window.setTimeout(trigger, 60000);
    return () => {
      document.removeEventListener('mouseout', onMouseOut);
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tick the countdown only while visible.
  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      setRemaining(remainingUntil(targetRef.current));
    }, 1000);
    return () => window.clearInterval(id);
  }, [visible]);

  if (!visible || !remaining) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={dismiss}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <button
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-navy to-navyLight px-8 pt-10 pb-8 text-center">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="h-4 w-4" /> Founding Member Offer
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            Wait — don’t miss <span className="text-gold-gradient">50% off</span> at launch
          </h3>
          <p className="text-slate-300 text-sm">
            Join the waitlist now to lock in founding-member pricing. This week’s offer ends in:
          </p>
        </div>

        <div className="px-8 py-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <TimeCell value={remaining.days} label="Days" />
            <TimeCell value={remaining.hours} label="Hrs" />
            <TimeCell value={remaining.minutes} label="Min" />
            <TimeCell value={remaining.seconds} label="Sec" />
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-6">
            <Clock className="h-3 w-3" /> Resets every week
          </div>

          <button
            onClick={() => {
              dismiss();
              openWaitlist({ source: 'Exit Intent Popup' });
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-goldDark to-gold text-navy font-bold py-3.5 rounded-lg shadow-xl shadow-gold/30 hover:shadow-gold/40 transition-all"
          >
            Claim 50% Off — Join the Waitlist <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={dismiss} className="w-full text-center text-xs text-gray-400 mt-3 hover:text-gray-600">
            No thanks, I’ll pay full price
          </button>
        </div>
      </div>
    </div>
  );
};
