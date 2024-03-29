"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader
  } from "@/components/ui/dialog";
  import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal = () => {
    const coverImage = useCoverImage();

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
          <DialogContent>
            <DialogHeader>
              <h2 className="text-center text-lg font-semibold">
                Cover Image
              </h2>
            </DialogHeader>
            {/* <SingleImageDropzone
              className="w-full outline-none"
              disabled={isSubmitting}
              value={file}
              onChange={onChange}
            /> */}
            todos upload img
          </DialogContent>
        </Dialog>
      );
}