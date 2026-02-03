'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

export default function SystemContextDiagramPNG() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/system context diagram strategem v1.png';
    link.download = 'system-context-diagram-v1.png';
    link.click();
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  return (
    <div className="w-full">
      <div
        className="border-2 border-architectural-ink bg-architectural-white cursor-pointer relative group"
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
          }
        }}
        aria-label="Expand diagram"
      >
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/system context diagram strategem v1.png"
            alt="Strategem Core V1 - System Context Diagram (C4 Level 1)"
            fill
            className="object-contain p-small"
            priority
          />
          <div className="absolute inset-0 bg-architectural-ink/0 group-hover:bg-architectural-ink/5 transition-colors duration-200" />
          <div className="absolute bottom-small right-small opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-architectural-ink text-architectural-white px-small py-2 text-xs uppercase tracking-[0.1em]">
              Click to expand
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full mt-small bg-transparent border border-architectural-ink px-small py-3 text-xs uppercase tracking-[0.1em] text-architectural-ink hover:bg-architectural-ink hover:text-architectural-white transition-all duration-200"
        type="button"
      >
        Download PNG
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-architectural-ink/90 z-50 flex items-center justify-center p-small"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-architectural-white text-sm uppercase tracking-[0.1em] hover:text-architectural-accent transition-colors"
              type="button"
              aria-label="Close modal"
            >
              Close [ESC]
            </button>
            <Image
              src="/system context diagram strategem v1.png"
              alt="Strategem Core V1 - System Context Diagram (C4 Level 1) - Full size"
              width={1200}
              height={900}
              id="modal-title"
              className="max-w-full max-h-[85vh] object-contain bg-architectural-white border-2 border-architectural-ink"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
