import { toast } from "sonner";

export default function SocialLink({
  href,
  label,
  copyMode,
}: {
  href: string;
  label: string;
  copyMode?: boolean;
}) {
  function copy() {
    toast("copied to clipboard!");
    navigator.clipboard.writeText(href);
  }

  if (copyMode) {
    return (
      <p
        className="inline text-blue-500 hover:text-blue-400 cursor-pointer"
        onClick={copy}
        onKeyUp={copy}
      >
        {label}
      </p>
    );
  }

  return (
    <a href={href} className="text-blue-500 hover:text-blue-400">
      {label}
    </a>
  );
}
