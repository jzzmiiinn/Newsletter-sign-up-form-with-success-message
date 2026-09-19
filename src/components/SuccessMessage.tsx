interface SuccessProps {
  email: string;
  onDismiss: () => void;
}

export const Success = ({ email, onDismiss }: SuccessProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(235,18%,26%)] md:p-6">
      <div className="flex min-h-screen w-full max-w-md flex-col justify-center bg-white px-6 py-10 md:min-h-0 md:rounded-3xl md:px-10 md:py-12">
        <img src="/icon-list.svg" alt="" className="mb-8 h-14 w-14" />

        <h1 className="text-4xl font-bold leading-tight text-[hsl(234,29%,20%)] md:text-5xl">
          Thanks for subscribing!
        </h1>

        <p className="mt-5 leading-relaxed text-[hsl(234,29%,20%)]">
          A confirmation message has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button
          className="mt-8 h-14 w-full rounded-lg bg-[hsl(234,29%,20%)] font-bold text-white transition hover:bg-[hsl(4,100%,67%)] focus:outline-none focus:ring-2 focus:ring-[hsl(4,100%,67%)] focus:ring-offset-2"
          onClick={onDismiss}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};
