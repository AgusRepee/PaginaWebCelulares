import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional right-side content (e.g., button, filter) */
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  actions,
}) => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-mobix-black">
              {title}
            </h1>
            {description ? (
              <p className="mt-2 text-gray-500 max-w-2xl">{description}</p>
            ) : null}

            <div className="mt-4 text-sm text-gray-400">
              <Link to="/" className="hover:text-mobix-black transition-colors">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-500">{title}</span>
            </div>
          </div>

          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
};
