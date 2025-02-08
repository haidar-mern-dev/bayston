"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Document {
  id: string;
  title: string;
  filename: string;
}

const LibraryPage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [newDocumentTitle, setNewDocumentTitle] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get("http://localhost:8000/documents/");
      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        const uniqueDocumentsMap = new Map<string, Document>();

        response.data.forEach((doc: any) => {
          const docTitle = doc.metadata?.file_name || 'Untitled';

          if (!uniqueDocumentsMap.has(docTitle)) {
            uniqueDocumentsMap.set(docTitle, {
              id: doc.metadata?.doc_id || '',
              title: docTitle,
              filename: docTitle,
            });
          }
        });

        const documentsArray = Array.from(uniqueDocumentsMap.values());
        setDocuments(documentsArray);
      } else {
        console.error("Error: Expected an array but got:", response.data);
      }
    } catch (error) {
      console.error("Error fetching documents:", error.response?.data || error.message);
    }
  };

  const addDocument = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fileInputRef.current?.files || fileInputRef.current.files.length === 0) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("title", newDocumentTitle);

    for (let i = 0; i < fileInputRef.current.files.length; i++) {
      formData.append("file", fileInputRef.current.files[i]);
    }

    formData.append("is_presentation", "true");

    try {
      const response = await axios.post("http://localhost:8000/documents/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Document(s) added successfully:", response.data);
      if (fileInputRef.current) fileInputRef.current.value = "";
      window.location.reload(); // Refresh the window after uploading
    } catch (error) {
      console.error("Error adding document:", error.response || error.message);
    }
  };

  const deleteDocument = async (fileName: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${fileName}"?`);
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`http://localhost:8000/documents/${fileName}`);
      fetchDocuments(); // Refresh the document list after deletion
    } catch (error) {
      console.error("Error deleting document:", error.response?.data || error.message);
    }
  };
  
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Add Document</h2>
          <form onSubmit={addDocument}>
            <input
              type="text"
              value={newDocumentTitle}
              onChange={(e) => setNewDocumentTitle(e.target.value)}
              placeholder="Document Title"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="file"
              ref={fileInputRef}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Upload Document
            </button>
          </form>
        </div>
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc.id} className="border p-4 rounded">
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {doc.filename || "No filename available"}
                </p>
                <button
                  onClick={() => deleteDocument(doc.filename)} // Pass the filename here
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
