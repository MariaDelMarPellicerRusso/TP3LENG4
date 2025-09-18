import { useState } from 'react';

export default function FileUploader() {
  const [fileInfo, setFileInfo] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const archivos = e.target.files;
    if (!archivos || archivos.length === 0) return;

    const archivo = archivos[0];

    // Validar que sea imagen
    if (!archivo.type.match(/image.*/i)) {
      setError('Solo se permiten imágenes.');
      setFileInfo(null);
      setImageURL(null);
      setProgress(0);
      return;
    }

    setError('');
    setProgress(0);

    const lector = new FileReader();

    lector.onloadstart = () => setProgress(0);
    lector.onprogress = (event) => {
      if (event.lengthComputable) {
        const porcentaje = parseInt((event.loaded / event.total) * 100);
        setProgress(porcentaje);
      }
    };
    lector.onloadend = () => {
      setFileInfo({
        name: archivo.name,
        type: archivo.type,
        size: archivo.size,
      });
      setImageURL(lector.result);
    };

    lector.readAsDataURL(archivo);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {progress > 0 && progress < 100 && (
        <progress value={progress} max="100">{progress}%</progress>
      )}

      {fileInfo && (
        <div style={{ marginTop: '10px' }}>
          <p><b>Nombre:</b> {fileInfo.name}</p>
          <p><b>Tipo:</b> {fileInfo.type}</p>
          <p><b>Tamaño:</b> {fileInfo.size} bytes</p>
          {imageURL && <img src={imageURL} alt={fileInfo.name} style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
      )}
    </div>
  );
}
