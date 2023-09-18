import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import Todo from "@/models/todoModels";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();
  await dbConnect();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
}
export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const singleRes = await Todo.findOne({ _id: id });
  return NextResponse.json({ singleRes }, { status: 200 });
}
