import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 text-xs text-neutral-500 font-normal">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="tracking-tight">
          Copyright © 2026 Rashish Regmi.
        </p>

        {/* Right: Legal & Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="hover:text-neutral-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-neutral-900 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/404"
            className="hover:text-neutral-900 transition-colors"
          >
            404
          </Link>
        </div>
      </div>
    </footer>
  );
};
