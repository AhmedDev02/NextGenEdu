import { useCallback } from "react";

function extractFileName(fullPath) {
  return fullPath.split("\\").pop().split("/").pop();
}

export function useFileDownloader() {
  const downloadFile = useCallback(async (fileUrl) => {
    let fileName = extractFileName(fileUrl);

    if (!fileName.toLowerCase().endsWith(".pdf")) {
      fileName += ".pdf";
    }

    let url = fileUrl;
    if (!fileUrl.startsWith("http://") && !fileUrl.startsWith("https://")) {
      url = "https://" + fileUrl;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  }, []);

  return downloadFile;
}
