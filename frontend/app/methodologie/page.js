import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ClipboardCheck, Microscope, ShieldCheck, Rocket } from 'lucide-react';

export default function MethodologiePage() {
  const steps = [
    {
      icon: <ClipboardCheck className="text-arduino-green" size={32} />,
      title: 'Étude de faisabilité',
      description: "Analyse de vos besoins, définition des spécifications techniques et étude de la faisabilité du projet."
    },
    {
      icon: <Microscope className="text-arduino-green" size={32} />,
      title: 'Prototypage',
      description: "Conception du prototype, développement du firmware et tests de validation sur banc d'essai."
    },
    {
      icon: <ShieldCheck className="text-arduino-green" size={32} />,
      title: 'Tests de fiabilité',
      description: 'Tests de résistance, de performance et de conformité aux normes industrielles.'
    },
    {
      icon: <Rocket className="text-arduino-green" size={32} />,
      title: 'Déploiement & Industrialisation',
      description: 'Passage en production, déploiement chez le client et support continu.'
    }
  ];

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark">
              Notre <span className="text-arduino-green">Méthodologie</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Un processus rigoureux pour garantir la qualité de vos projets
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-arduino-green/20"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 p-6">
                    <div className="bg-arduino-light rounded-2xl p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-arduino-green/30 mr-4">0{index + 1}</span>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-arduino-dark mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-arduino-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <ShieldCheck className="mx-auto text-arduino-green" size={48} />
            <h3 className="text-2xl font-bold mt-4 mb-3">Confidentialité Garantie</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nous signons une clause de confidentialité (NDA) avec chaque client pour protéger 
              votre propriété intellectuelle et vos idées.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}