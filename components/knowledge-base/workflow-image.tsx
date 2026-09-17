"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import styles from "./knowledge-base.module.css";

const src = "/images/knowledge-base/n8n-workflow.png";
const alt = "n8n prototype: closed ticket trigger, ticket context, knowledge qualification, duplicate check, article draft, knowledge tracker and reviewer notification.";

export function WorkflowImage() {
  return <Dialog>
    <DialogTrigger asChild>
      <button className={styles.imageButton} aria-label="Enlarge the n8n workflow screenshot">
        <Image src={src} alt={alt} width={2048} height={914} sizes="92vw" />
        <span><Expand size={14} aria-hidden="true" /> Click to enlarge</span>
      </button>
    </DialogTrigger>
    <DialogContent className="w-[96vw] max-w-[96vw] sm:max-w-[96vw] max-h-[94dvh] overflow-y-auto border-[#343436] bg-[#030303] text-[#f5f4f2]">
      <DialogTitle>Inside the n8n prototype</DialogTitle>
      <DialogDescription>Draft creation ends with a reviewer notification. Publication requires a human decision.</DialogDescription>
      <Image src={src} alt={alt} width={2048} height={914} sizes="96vw" className="h-auto w-full" />
      <a href={src} target="_blank" rel="noreferrer" className="text-sm text-[#c9bb82] underline">Open original image for full-resolution inspection</a>
    </DialogContent>
  </Dialog>;
}
