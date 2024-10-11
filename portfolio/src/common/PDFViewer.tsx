import { Button } from "@/components/ui/button";
import { useState } from "react";

const documents: string[] = ["/documents/Dissertation.pdf", "/documents/LiteratureReview.pdf", "/documents/ProjectProposal.pdf"];

const PDFViewer = () => {

    const [selectedDocument, setDocument] = useState(0);

    const changePDF = () => {
        setDocument(1);
    }

    return (
        <div>
            <object data={documents[selectedDocument]} className="w-full h-full" type="application/pdf" />
            <Button onClick={changePDF} />
        </div>
    );
};

export default PDFViewer;
