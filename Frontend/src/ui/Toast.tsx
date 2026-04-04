import React from 'react';
import { useToast } from './ToastContext';

const Toast: React.FC<{ toast: { id: number; type: string; message: string } }> = ({ toast }) => {
  const { removeToast } = useToast();

  const toastStyles: Record<string, string> = {
    success: 'toast-success',
    failure: 'toast-failure',
    warning: 'toast-warning',
    info: 'toast-info',
    default: 'toast-default',
  };

  const styleClass = toastStyles[toast.type] ?? toastStyles.default;

  return (
    <div className={`border-l-4 p-4 rounded-xl shadow-xl ${styleClass}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-sm uppercase tracking-wide">{toast.type}</p>
          <p className="mt-1 text-sm leading-6">{toast.message}</p>
        </div>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => removeToast(toast.id)}
          className="text-white/80 hover:text-white transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();
  return (
    <div className="fixed top-6 right-6 z-50 w-[340px] space-y-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};