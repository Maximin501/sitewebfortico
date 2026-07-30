'use client';
import { useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Send, CheckCircle, Upload, X, FileText, File, FileSpreadsheet, FileImage } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Hardware',
    message: '',
  });

  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  // ✅ Fonction pour gérer les fichiers (valide et ajoute)
  const handleFiles = (selectedFiles) => {
    const validFiles = selectedFiles.filter(file => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'image/jpeg',
        'image/png'
      ];
      
      if (file.size > maxSize) {
        alert(`⚠️ Le fichier ${file.name} dépasse la taille maximale de 10MB`);
        return false;
      }
      if (!validTypes.includes(file.type)) {
        alert(`⚠️ Le fichier ${file.name} n'est pas au format accepté (PDF, Word, Excel, JPEG, PNG)`);
        return false;
      }
      return true;
    });

    setFiles(prev => [...prev, ...validFiles]);
  };

  // ✅ Gestion du changement de fichier
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
    // Réinitialiser l'input pour permettre de sélectionner à nouveau les mêmes fichiers
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // ✅ Supprimer un fichier de la liste
  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // ✅ Icône selon le type de fichier
  const getFileIcon = (type) => {
    if (type.includes('pdf')) return <FileText size={20} className="text-red-500" />;
    if (type.includes('word') || type.includes('document')) return <File size={20} className="text-blue-500" />;
    if (type.includes('excel') || type.includes('spreadsheet')) return <FileSpreadsheet size={20} className="text-green-500" />;
    if (type.includes('image')) return <FileImage size={20} className="text-purple-500" />;
    return <File size={20} className="text-gray-500" />;
  };

  // ✅ Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setUploadProgress(0);

    const formDataToSend = new FormData();
    
    // Ajouter les champs du formulaire
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Ajouter les fichiers
    files.forEach((file) => {
      formDataToSend.append('files', file);
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      setUploadProgress(100);

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: 'Hardware',
          message: '',
        });
        setFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        const errorData = await response.json();
        console.error('❌ Erreur serveur:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('❌ Erreur réseau:', error);
      setStatus('error');
    }
  };

  // ✅ Gestion des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Gestion du drag & drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-arduino-green', 'bg-arduino-green/5');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('border-arduino-green', 'bg-arduino-green/5');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-arduino-green', 'bg-arduino-green/5');
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark">
                Demander un <span className="text-arduino-green">Devis</span>
              </h1>
              <p className="text-gray-600 mt-4">
                Remplissez le formulaire ci-dessous, nous vous répondrons sous 48h.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                📎 Vous pouvez joindre des fichiers (PDF, Word, Excel, images - max 10MB)
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle className="mx-auto text-green-500" size={48} />
                <h3 className="text-2xl font-bold text-green-700 mt-4">Message envoyé !</h3>
                <p className="text-green-600 mt-2">
                  Merci de nous avoir contactés. Nous reviendrons vers vous très rapidement.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-arduino-green font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-arduino-light rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                  >
                    <option value="Hardware">Hardware (PCB, électronique)</option>
                    <option value="Software">Software (Firmware, applications)</option>
                    <option value="Solution Clé en main">Solution Clé en main</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-arduino-green focus:border-transparent outline-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                {/* ✅ Section upload de fichiers - Version corrigée */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📎 Pièces jointes (optionnel)
                  </label>
                  
                  {/* Zone de dépôt cliquable */}
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-arduino-green transition-colors cursor-pointer"
                    onClick={() => document.getElementById('file-upload')?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    />
                    <Upload className="mx-auto text-gray-400" size={32} />
                    <p className="text-gray-500 mt-2">Cliquez ou déposez vos fichiers ici</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, Word, Excel, Images (max 10MB par fichier)</p>
                  </div>

                  {/* Liste des fichiers ajoutés */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            {getFileIcon(file.type)}
                            <div>
                              <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {(file.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Barre de progression */}
                {status === 'loading' && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-arduino-green h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-center">Envoi en cours...</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-8 w-full bg-arduino-green text-white py-4 rounded-xl font-semibold hover:bg-arduino-green/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer la demande
                      <Send size={18} />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    ❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

