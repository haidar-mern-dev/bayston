"use client";

import { useState } from "react";
import ChatInterface from "@/components/ChatInterface";
import dynamic from "next/dynamic";
import jsPDF from "jspdf"; // Import jsPDF

const DynamicChart = dynamic(() => import("@/components/DynamicChart"), {
  ssr: false,
});

type Message = {
  text: string;
  sender: "user" | "bot";
  type: "text" | "plot" | "image";
  plotData?: any;
};

export default function MainPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string, endpoint: string) => {
    setMessages((prev) => [
      ...prev,
      { text: message, sender: "user", type: "text" },
    ]);
    setIsLoading(true);
    let response: Response | undefined;
  
    try {
      // Fetch data based on endpoint
      switch (endpoint) {
        case "getAnswerText":
        case "getAnswerGraph":
          response = await fetch(`http://localhost:8000/api/${endpoint}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: message }),
          });
          break;
  
        case "getAnswerPresentation":
          response = await fetch(`http://localhost:8000/api/${endpoint}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              topic: message,
              template_name: "template_3",
            }),
          });
          break;
  
        case "getAnswerArticle":
          response = await fetch(`http://localhost:8000/api/${endpoint}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ topic: message }),
          });
          break;
  
        default:
          response = await fetch(`http://localhost:8000/api/${endpoint}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: message }),
          });
          break;
      }
  
      if (!response || !response.ok) {
        throw new Error("Failed to get response");
      }
  
      const contentType = response.headers.get("Content-Type");
  
      // Handle specific cases based on endpoint
      if (endpoint === "getAnswerText") {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { text: data.response, sender: "bot", type: "text" },
        ]);
      } else if (endpoint === "getAnswerGraph") {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { text: data.response, sender: "bot", type: "plot", plotData: data.plotData },
        ]);
      } else if (endpoint === "getAnswerArticle") {
        const data = await response.json();
        const articleContent = data.storm_gen_article_polished || "No article content available.";
        const outlineContent = data.storm_gen_outline || "No outline content available.";
        const urlContent = data.url_to_info || "No URL available.";
  
        // Create a new PDF document
        const pdf = new jsPDF();
        const margin = 10; // Define margin for the PDF
  
        // Add content to the PDF
        pdf.setFontSize(8); // Set font size
  
        // Article
        pdf.text("Article:", margin, margin); // Title for the article content
        pdf.text(articleContent, margin, margin + 10, { maxWidth: pdf.internal.pageSize.getWidth() - 2 * margin }); // Article content with wrapping
  
        pdf.addPage(); // Add a new page for outline and URL
        // Outline
        pdf.text("Outline:", margin, margin); // Title for the outline
        pdf.text(outlineContent, margin, margin + 10, { maxWidth: pdf.internal.pageSize.getWidth() - 2 * margin }); // Outline content with wrapping
  
        pdf.addPage(); // Add a new page for the URL
        // URL
        pdf.text("URL to Information:", margin, margin); // Title for the URL
        pdf.text(urlContent, margin, margin + 10, { maxWidth: pdf.internal.pageSize.getWidth() - 2 * margin }); // URL content with wrapping
  
        // Save the PDF with a filename
        pdf.save("article.pdf");
        
        // Add message about PDF download
        setMessages((prev) => [
          ...prev,
          { text: "PDF downloaded successfully !", sender: "bot", type: "text" },
        ]);
  
      } else if (endpoint === "getAnswerPresentation") {
        // Wait for the response blob
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  
  // Set the filename based on the response's content-disposition header or default to topic.pptx
  const contentDisposition = response.headers.get("content-disposition");
  let filename = "presentation.pptx"; // Default filename

  if (contentDisposition) {
    const match = contentDisposition.match(/filename="?(.+)"?/);
    if (match) {
      filename = match[1];
    }
  }
  
  link.href = url;
  link.download = filename; // Use the filename from the content-disposition header
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url); 
        
      }
      else if (contentType?.startsWith("image/")) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setMessages((prev) => [
          ...prev,
          { text: imageUrl, sender: "bot", type: "image" },
        ]);
      } else {
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], {
          type: contentType || "application/octet-stream",
        });
  
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
  
        const contentDisposition = response.headers.get("content-disposition");
        let filename = "downloaded_file";
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="?(.+)"?/);
          if (match) {
            filename = match[1];
          }
        }
  
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, an error occurred.", sender: "bot", type: "text" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden">
        <ChatInterface 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}
