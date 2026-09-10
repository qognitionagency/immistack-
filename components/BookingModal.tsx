import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * The Cal.com booking dialog.
 *
 * Separate from `WaitlistModal` rather than reusing it, for one reason: that
 * panel is `max-w-lg`, which is right for a six-field form and too narrow for
 * a month grid plus a time column — Cal.com collapses to a cramped single
 * column below roughly 3xl.
 *
 * Embedded as a plain iframe, not `@calcom/embed-react`. Cal.com serves these
 * pages with no `X-Frame-Options` and no `frame-ancestors` directive (checked
 * before building this), so framing is supported; and this app pins its own
 * lockfile under pnpm 10, which blocks dependency build scripts, so every new
 * package is a deploy risk taken for something an iframe already does.
 *
 * `?embed=true` is what strips Cal.com's own site chrome. Without it the page
 * renders its marketing navigation inside our dialog.
 */
export const BOOKING_URL = 'https://cal.com/immistack-tech/30min';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape — the waitlist dialog closes on backdrop click alone, but
  // an iframe swallows clicks, so without this the panel can only be dismissed
  // by hitting the narrow border around it.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // `aria-modal` asserts focus is contained. It was not: focus stayed on the
  // page behind, so a keyboard or screen-reader user opened a dialog they were
  // never moved into. Move focus to Close on open, and restore it on unmount.
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => previous?.focus?.();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain px-3 py-6 sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Book a 30-minute demo"
    >
      <div
        className="fixed inset-0 bg-navy/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[calc(100dvh_-_3rem)] sm:max-h-[calc(100dvh_-_4rem)] overflow-hidden animate-fade-in-up">
        <div className="sticky top-0 z-10 h-0">
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <iframe
          src={`${BOOKING_URL}?embed=true`}
          title="Book a 30-minute demo with ImmiStack"
          className="w-full h-[min(80vh,46rem)] border-0"
          loading="lazy"
        />

        {/* Always rendered, never in <noscript>.
            A `<noscript>` fallback here covered a case that cannot happen: with
            JavaScript disabled this React dialog never mounts at all, so the
            one situation it claimed to handle — a blocked or failed embed —
            was left as a blank white panel with no route out. A corporate
            network blocking cal.com is the likeliest failure this dialog will
            ever see, so the escape hatch has to be unconditional. */}
        <div className="border-t border-gray-100 px-6 py-3 text-center text-xs text-gray-500">
          Calendar not loading?{' '}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-techBlue underline"
          >
            Open the booking page in a new tab
          </a>
        </div>
      </div>
    </div>
  );
};
