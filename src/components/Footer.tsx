import { Instagram } from 'lucide-react';

const Footer = () => (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.webp"
                alt="Next Level Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Elevando o potencial humano através da tecnologia e psicologia aplicada. Junte-se a milhares de pessoas que decidiram não aceitar a mediocridade.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Produto</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Metodologia</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p>© 2026 Next Level AI. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-gray-700">|</span>
            <p>CNPJ: 61.560.000/0001-58</p>
            <span className="hidden md:inline text-gray-700">|</span>
            <p>Desenvolvido por Next Level Digital</p>
          </div>
          <a href="https://www.instagram.com/sociedade.nextlevel/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors bg-white/5 p-3 rounded-full hover:bg-emerald-500/10">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
);

export default Footer;
