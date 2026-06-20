"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginForm = () => {
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (response?.error) {
        setError("Email atau Password yang Anda Masukan Salah");
        setPending(false);
      } else {
        setPending(false);
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("terjadi kesalahan koneksi sistem");
      setPending(false);
    }
  };

  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setError("");
  };
  return (
    <>
      <div className="flex max-w-5xl items-center flex-col justify-center my-auto p-6 bg-gray-200">
        <h1 className="text-4xl font-bold">Selamat Datang</h1>
        <form className="w-2xl" ref={formRef} onSubmit={handleSubmit}>
          {error && (
            <div className="mt-5 p-3 text-sm text-red-600 bg-red-100 border border-red-300 rounded-sm">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-4 mt-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="masukan email anda"
              required
              suppressHydrationWarning={true}
              className="w-full py-2 px-4 border border-gray-400 focus:outline-none focus:border-gray-600 "
            />
          </div>
          <div className="mt-5 flex-col flex gap-4 relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              required
              suppressHydrationWarning={true}
              className="w-full py-2 px-4 border border-gray-400 focus:outline-none focus:border-gray-600"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 translate-y-1/2 cursor-pointer"
              suppressHydrationWarning={true}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOffOutline className="size-5" />
              ) : (
                <IoEyeOutline className="size-5" />
              )}
            </button>
          </div>
          <div className="mt-5 flex gap-3">
            <button
              className="px-6 py-2 bg-stone-400 cursor-pointer active:bg-stone-600 rounded-sm text-gray-100"
              disabled={isPending}
              type="submit"
              suppressHydrationWarning={true}
            >
              {isPending ? "Memproses..." : "Login"}
            </button>
            <button
              className="px-6 py-2 bg-red-500 hover:bg-red-600 cursor-pointer active:bg-red-700 rounded-sm text-white disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
              type="button"
              onClick={handleClear}
              disabled={isPending}
              suppressHydrationWarning={true}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
