import React, { createContext, useCallback, useContext, useState } from 'react';
import { BookingModal } from '../components/BookingModal';

/**
 * Mirrors `WaitlistContext` deliberately — same provider/hook/modal shape — so
 * there is one way to open a dialog on this site rather than two.
 *
 * The two are separate contexts because they are separate conversion events:
 * the waitlist writes a lead to the CRM through `/api/create-lead`, while a
 * booking is held entirely by Cal.com and this site never sees it. Merging
 * them would make "did we capture this person?" ambiguous.
 */
interface BookingContextValue {
  openBooking: () => void;
  closeBooking: () => void;
  isOpen: boolean;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export const useBooking = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within <BookingProvider>');
  return ctx;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
};
