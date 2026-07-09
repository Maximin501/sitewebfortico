// components/recrutement/OffreCard.jsx
import { Briefcase, MapPin, Calendar, Send, Mail, Phone } from 'lucide-react';

export default function OffreCard({ offre }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6 md:p-8">
        {/* En-tête */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-arduino-dark">{offre.titre}</h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="flex items-center text-sm text-gray-600">
                <Briefcase size={16} className="mr-1 text-arduino-green" />
                {offre.type || 'Stage'}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <MapPin size={16} className="mr-1 text-arduino-green" />
                {offre.lieu}
              </span>
              {offre.date_limite && (
                <span className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-1 text-arduino-green" />
                  Date limite : {new Date(offre.date_limite).toLocaleDateString('fr-FR')}
                </span>
              )}
            </div>
          </div>
          <a
            href={`mailto:${offre.email || 'fortico261@gmail.com'}?subject=Candidature%20${encodeURIComponent(offre.titre)}`}
            className="bg-arduino-green text-white px-6 py-3 rounded-full font-semibold hover:bg-arduino-green/90 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Send size={18} />
            Postuler
          </a>
        </div>

        {/* Qualités */}
        {offre.qualites && Array.isArray(offre.qualites) && offre.qualites.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {offre.qualites.map((qualite, index) => (
              <div key={index} className="bg-arduino-light rounded-lg p-3 text-center">
                <div className="text-sm font-bold text-arduino-dark capitalize">{qualite.nom}</div>
                <div className="text-xs text-gray-600">{qualite.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Missions et Profil */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {offre.missions && (
            <div className="bg-arduino-light rounded-xl p-4">
              <h4 className="font-bold text-arduino-dark mb-2">Missions</h4>
              <div className="text-sm text-gray-700">
                {Array.isArray(offre.missions) ? (
                  offre.missions.map((block, idx) => {
                    if (block.type === 'paragraph') {
                      const text = block.children?.[0]?.text || '';
                      if (text.startsWith('- ')) {
                        return <li key={idx} className="ml-4">• {text.substring(2)}</li>;
                      }
                      return <p key={idx} className="mt-1">{text}</p>;
                    }
                    return null;
                  })
                ) : (
                  <p>{offre.missions}</p>
                )}
              </div>
            </div>
          )}
          {offre.profil && (
            <div className="bg-arduino-light rounded-xl p-4">
              <h4 className="font-bold text-arduino-dark mb-2">Profil recherché</h4>
              <div className="text-sm text-gray-700">
                {Array.isArray(offre.profil) ? (
                  offre.profil.map((block, idx) => {
                    if (block.type === 'paragraph') {
                      const text = block.children?.[0]?.text || '';
                      if (text.startsWith('- ')) {
                        return <li key={idx} className="ml-4">• {text.substring(2)}</li>;
                      }
                      return <p key={idx} className="mt-1">{text}</p>;
                    }
                    return null;
                  })
                ) : (
                  <p>{offre.profil}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        {(offre.email || offre.telephone) && (
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-gray-600">
            {offre.email && (
              <span className="flex items-center">
                <Mail size={16} className="mr-1 text-arduino-green" />
                {offre.email}
              </span>
            )}
            {offre.telephone && (
              <span className="flex items-center">
                <Phone size={16} className="mr-1 text-arduino-green" />
                {offre.telephone}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
