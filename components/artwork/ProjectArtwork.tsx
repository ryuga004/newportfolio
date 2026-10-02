import type { Artwork } from "@/utils/content/types";
import PipelineArtwork from "./PipelineArtwork";
import ScannerArtwork from "./ScannerArtwork";
import MeshArtwork from "./MeshArtwork";
import GridArtwork from "./GridArtwork";

export default function ProjectArtwork({ artwork }: { artwork: Artwork }) {
  switch (artwork.kind) {
    case "pipeline":
      return <PipelineArtwork art={artwork} />;
    case "scanner":
      return <ScannerArtwork art={artwork} />;
    case "mesh":
      return <MeshArtwork art={artwork} />;
    case "grid":
      return <GridArtwork art={artwork} />;
  }
}
