import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center py-10">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}>
          Puskar Sarkar
        </motion.h1>
        <p className="text-lg text-gray-400">Cybersecurity | AI | Backend | I'm Funny 😅</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="ghost" asChild>
            <a href="https://github.com/Puskar-Sarkar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://www.linkedin.com/in/puskarsarkar" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://drive.google.com/file/d/1FOq6YnsDaxswzb99Qkj5nqRj0m8RurKT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </header>

      <main className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Smart India Hackathon 2024</h2>
            <p className="text-gray-300 mb-2">
              Software to identify individuals behind messaging-based drug trafficking using behavioral analysis, NLP, OCR, and bot scraping.
            </p>
            <p className="text-sm text-gray-400 mb-4">Tech: NLP, OCR, Bootstrap, Bot-based scraping</p>
            <a href="https://youtu.be/6WruAn72x0g?si=cTUXxri4kIuWBxLB" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Watch Video</a>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Cybersecurity Internship (Prodigy InfoTech)</h2>
            <p className="text-gray-300 mb-2">
              5 project suite: Caesar Cipher, Image Encryption, Password Checker, Keylogger, Packet Sniffer.
            </p>
            <p className="text-sm text-gray-400 mb-4">Tech: Python, Scapy</p>
            <a href="https://github.com/Puskar-Sarkar/cybersecurity-internship-prodigy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repo</a>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-10 text-sm text-gray-500">
        Built with ❤️ using React + TailwindCSS

      <ContactForm />
      </footer>
    </div>
  );
}
