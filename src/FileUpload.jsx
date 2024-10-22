import React, { useState, useRef } from "react";
import { FileIcon, UploadIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Slider } from "./components/ui/slider";
import { Label } from "./components/ui/label";

const PDFUploader = () => {
  const [file, setFile] = useState(null);
  const [complexity, setComplexity] = useState(1);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleComplexityChange = (value) => {
    setComplexity(value[0]);
  };

  const handleUpload = () => {
    // Add additional upload logic here if necessary
    navigate("/summary");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Upload your medical report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
          >
            {file ? (
              <div className="flex items-center justify-center space-x-2">
                <FileIcon className="h-6 w-6 text-primary" />
                <span className="font-medium text-sm text-gray-600">{file.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile();
                  }}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div>
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="mt-1 text-xs text-gray-500">PDF files only</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </CardContent>
        <div className="flex justify-center mb-4">
          <Button onClick={handleUpload} disabled={!file} className="rounded-xl bg-red-500">
            Upload
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PDFUploader;
