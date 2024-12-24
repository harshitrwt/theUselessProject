export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-purple-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Unnecessary Inventions. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made with <span role="img" aria-label="heart">❤️</span> by harshit_rwt
        </p>
      </div>
    </footer>
  );
}