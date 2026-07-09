// app/services/page.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cpu, Code, Cloud, Brain, Link, MonitorSmartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Cpu className="text-arduino-green" size={32} />,
      title: 'R&D & Prototypage',
      description: 'Conception de schémas électroniques, routage de circuits imprimés (PCB) multi-couches avec KiCad.',
      features: ['Schémas électroniques', 'PCB multi-couches', 'Simulation']
    },
    {
      icon: <Code className="text-arduino-green" size={32} />,
      title: 'Systèmes Embarqués & Firmware',
      description: 'Programmation bas niveau, gestion de la basse consommation, automatisation et protocoles industriels.',
      features: ['ESP32, STM32', 'Basse consommation', 'Protocoles industriels']
    },
    {
      icon: <Cloud className="text-arduino-green" size={32} />,
      title: 'IoT & Plateformes Web',
      description: 'Connectivité Cloud, traitement de données en temps réel et création de tableaux de bord de supervision.',
      features: ['Connectivité Cloud', 'Temps réel', 'Dashboards']
    },
    {
      icon: <Brain className="text-arduino-green" size={32} />,
      title: 'Intelligence Artificielle (IA)',
      description: 'Intégration de modèles d\'IA pour l\'analyse de données, la prédiction et l\'automatisation intelligente.',
      features: ['Analyse prédictive', 'Traitement du langage', 'Vision par ordinateur']
    },
    {
      icon: <Link className="text-arduino-green" size={32} />,
      title: 'API & Microservices',
      description: 'Conception et développement d\'API RESTful et GraphQL pour connecter vos systèmes et services.',
      features: ['RESTful API', 'GraphQL', 'Documentation OpenAPI']
    },
    {
      icon: <MonitorSmartphone className="text-arduino-green" size={32} />,
      title: 'Applications Web & Mobile',
      description: 'Développement d\'applications web responsives et d\'applications mobiles pour une expérience utilisateur optimale.',
      features: ['React Native', 'Flutter', 'PWA']
    }
  ];

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark">
              Nos <span className="text-arduino-green">Services</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des solutions techniques complètes pour vos projets, de l'embarqué à l'intelligence artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-arduino-light rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-arduino-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
