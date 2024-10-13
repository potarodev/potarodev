import { Toaster } from "sonner";

export default function ToasterWrapper() {
  return (
    <Toaster
      visibleToasts={1}
      toastOptions={{
        duration: 2000,
        className:
          "dark:bg-zinc-900 bg-white dark:text-white dark:border-zinc-800 border-zinc-200 text-lg",
      }}
    />
  );
}
