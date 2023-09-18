import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import Todo from "@/models/todoModels";
export async function POST(request) {
  const { title, description } = await request.json();
  await dbConnect();
  await Todo.create({ title, description });

  return NextResponse.json(
    { message: "Task added successfully" },
    { status: 200 }
  );
}

export async function GET() {
  await dbConnect();
  const topics = await Todo.find();
  return NextResponse.json({ topics });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
}
/* its my experiment and its work */
/* export async function PUT(request) {
  const id = request.nextUrl.searchParams.get( "id" );
  const { title, description } = await request.json();
  await dbConnect();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
} */
