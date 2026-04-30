import { FaCloudUploadAlt, FaSearch } from "react-icons/fa";
import { Button } from "./ui/Button";

export function HowItWorks() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
      <Button
        className="bg-linear-to-r from-[#6f66e9] to-[#a55bf5]  px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
        icon={<FaCloudUploadAlt />}
      >
        Upload CV
      </Button>
      <Button
        variant="secondary"
        className="px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
        icon={<FaSearch />}
      >
        Find Jobs
      </Button>
    </div>
  );
}
