import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function StackedCircularFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://x.com/deep_ai21"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Twitter</span>
            <FaSquareXTwitter className="h-6 w-6" />
          </Link>
          <Link
            href="https://t.me/+eIaWovBDPTViZTBl"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Telegram</span>
            <FaTelegram className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <nav className="flex justify-center space-x-6">
            <Link
              href="/privacy"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Privacy
            </Link>
            <Link
              href="/disclaimer"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Disclaimer
            </Link>
          </nav>
          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Deep AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }