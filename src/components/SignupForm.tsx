import { useState } from "react";

interface FormProps {
  onSubmit: (email: string) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError(true);
      return;
    }

    setError(false);
    onSubmit(email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(235,18%,26%)] md:p-6">
      <div className="flex w-full max-w-4xl flex-col overflow-hidden bg-white md:flex-row md:rounded-3xl md:p-3">
        <div className="order-2 flex flex-1 flex-col justify-center px-6 py-10 md:order-1 md:px-10 md:py-8">
          <h1 className="text-4xl font-bold text-[hsl(234,29%,20%)] md:text-5xl">
            Stay updated!
          </h1>

          <p className="mt-5 text-[hsl(234,29%,20%)]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3 text-[hsl(234,29%,20%)]">
              <img
                src="/icon-list.svg"
                alt=""
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <span>Product discovery and building what matters</span>
            </li>

            <li className="flex items-start gap-3 text-[hsl(234,29%,20%)]">
              <img
                src="/icon-list.svg"
                alt=""
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <span>Measuring to ensure updates are a success</span>
            </li>

            <li className="flex items-start gap-3 text-[hsl(234,29%,20%)]">
              <img
                src="/icon-list.svg"
                alt=""
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <span>And much more!</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="text-sm font-bold text-[hsl(234,29%,20%)]"
              >
                Email address
              </label>

              {error && (
                <p className="text-sm font-bold text-[hsl(4,100%,67%)]">
                  Valid email required
                </p>
              )}
            </div>

            <input
              className={`mt-2 h-14 w-full rounded-lg px-5 outline-none ${
                error
                  ? "border border-[hsl(4,100%,67%)] bg-[hsl(4,100%,95%)] text-[hsl(4,100%,67%)]"
                  : "border border-[hsl(0,0%,58%)]"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError(false);
              }}
            />

            <button
              className="mt-5 h-14 w-full rounded-lg bg-[hsl(234,29%,20%)] font-bold text-white transition hover:bg-[hsl(4,100%,67%)] focus:outline-none focus:ring-2 focus:ring-[hsl(4,100%,67%)] focus:ring-offset-2"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2 md:w-[45%]">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/illustration-sign-up-desktop.svg"
            />

            <img
              src="/illustration-sign-up-mobile.svg"
              alt=""
              className="h-full w-full object-cover md:rounded-2xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
