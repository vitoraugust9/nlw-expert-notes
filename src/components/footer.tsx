import { Github, Instagram, Linkedin } from "lucide-react";


export default function Footer() {
    return (

        <footer className="footer p-4 flex justify-between">
            <aside className="text-md md:text-lg text-center">
                <p>© 2024 Vitor Augusto</p>
            </aside>
            <nav className="grid grid-flow-col gap-2 md:gap-6 md:place-self-center md:justify-self-end">
                <a href="https://github.com/vitoraugust9" target="_blank"><Github className="size-8 md:size-7"/></a>
                <a href="https://www.linkedin.com/in/vitoraugustosilva/" target="_blank"><Linkedin className="size-8 md:size-7"/></a>
                <a href="https://www.instagram.com/vitoraugusto__/" target="_blank"><Instagram className="size-8 md:size-7"/></a>

                </nav>
        </footer>
    );
}