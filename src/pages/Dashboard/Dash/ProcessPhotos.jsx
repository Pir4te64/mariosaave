import React, { useState, useRef, useCallback } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProcessPhotos = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Referencia al input para poder abrirlo manualmente al hacer clic en el área de drop
  const fileInputRef = useRef(null);

  // Maneja el cambio al seleccionar archivos manualmente
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    addFilesToImages(files);
  };

  // Agrega los archivos (FileList) al estado `images`, creando URLs temporales
  const addFilesToImages = useCallback((files) => {
    const newImages = files.map((file) => ({
      // Usamos un id sencillo basado en la fecha + random. En producción podrías usar un ID más robusto.
      id: new Date().getTime() + Math.random(),
      src: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, []);

  // Drag & Drop: Evita que el navegador abra la imagen al soltarla
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Drag & Drop: Se sueltan archivos sobre la zona
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    addFilesToImages(files);
  };

  // Eliminar una imagen específica
  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white  rounded-lg p-4">
      {/* Encabezado */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#99A98F] flex items-center justify-center mr-3">
          <FaCloudUploadAlt className="text-white w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold">Fotos del proceso</h2>
      </div>

      {/* Zona de arrastrar/soltar y clic para subir archivos */}
      <div
        className={`w-full border-dashed border-2 p-6 text-center cursor-pointer 
          ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        {isDragging ? (
          <p className="text-gray-500 mb-2">Suelta tus imágenes aquí...</p>
        ) : (
          <>
            <p className="text-gray-500 mb-2">Subir foto</p>
            <p className="text-gray-400">
              Arrastra y suelta o haz clic para seleccionar
            </p>
          </>
        )}

        {/* Input oculto para seleccionar archivos */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Lista de imágenes cargadas */}
      {images.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Fotos cargadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {images.map((img) => (
              <div key={img.id} className="relative group">
                <img
                  src={img.src}
                  alt={`preview-${img.id}`}
                  className="object-cover w-full h-32 rounded"
                />
                {/* Botón para eliminar la imagen */}
                <button
                  onClick={() => removeImage(img.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Eliminar imagen"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessPhotos;
