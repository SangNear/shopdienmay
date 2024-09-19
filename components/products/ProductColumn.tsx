import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";
import { PencilRuler } from "lucide-react";
import SwitchSpecials from "../custom ui/SwitchSpecials";
export const columns: ColumnDef<ProductTypes>[] = [
  {
    accessorKey: "name",
    header: () => <p style={{ textAlign: "center" }}>Tên sản phẩm</p>,
    cell: ({ row }) => (
      <Link href={`/quantri/sanpham/edit/${row.original.slug}`} className="hover:text-[#fe0000] text-left">{row.original.name}</Link>
    ),
  },
  {
    accessorKey: "specials",
    header: () => <p style={{ textAlign: "center" }}>Đặc biệt</p>,
    cell: ({ row }) => {
      console.log("Row data:", row.original); // Debugging data
      const slug = row.original.slug || "default-id"; // Fallback to prevent undefined id
      return <SwitchSpecials slug={slug} isSpecials={row.original.specials} />;
    },
  },
  {
    accessorKey: "categories",
    header: () => <p style={{ textAlign: "center" }}>Loại sản phẩm</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>
        {typeof row.original.categories === "object"
          ? row.original.categories?.name
          : row.original.categories}
      </p>
    ),
  },

  {
    accessorKey: "original",
    header: () => <p style={{ textAlign: "center" }}>Nguồn gốc</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>{row.original.original}</p>
    ),
  },
  {
    accessorKey: "price",
    header: () => <p style={{ textAlign: "center" }}>Giá cả</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>{row.original.price}</p>
    ),
  },
  {
    id: "action",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Link className="bg-orange-400 py-2 px-3 text-white rounded-md text-sm" href="#">

            <PencilRuler className="text-sm" />
          </Link>
          <Delete id={row.original._id} item="products" />

        </div>

      )

    }
  },
];
