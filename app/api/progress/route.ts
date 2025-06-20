import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import UserProgress from "@/models/UserProgress";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const {
      categoryId,
      quizId,
      score,
      totalQuestions,
      correctAnswers,
      studyTime,
    } = await request.json();

    // Find or create user progress
    let userProgress = await UserProgress.findOne({
      userId: session.user.email,
    });

    if (!userProgress) {
      userProgress = new UserProgress({
        userId: session.user.email,
        totalQuizzes: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        totalScore: 0,
        studyTime: 0,
        quizHistory: [],
      });
    }

    // Update progress
    userProgress.totalQuizzes += 1;
    userProgress.totalQuestions += totalQuestions;
    userProgress.correctAnswers += correctAnswers;
    userProgress.totalScore += score;
    userProgress.studyTime += studyTime || 0;
    userProgress.lastActivity = new Date();

    // Add to quiz history
    userProgress.quizHistory.push({
      categoryId,
      quizId,
      score,
      totalQuestions,
      correctAnswers,
      completedAt: new Date(),
    });

    // Keep only last 50 quiz records
    if (userProgress.quizHistory.length > 50) {
      userProgress.quizHistory = userProgress.quizHistory.slice(-50);
    }

    await userProgress.save();

    return NextResponse.json({
      success: true,
      progress: {
        totalQuizzes: userProgress.totalQuizzes,
        totalQuestions: userProgress.totalQuestions,
        correctAnswers: userProgress.correctAnswers,
        averageScore: userProgress.averageScore,
        accuracy: userProgress.accuracy,
        formattedStudyTime: userProgress.formattedStudyTime,
        lastActivity: userProgress.lastActivity,
      },
    });
  } catch (error) {
    console.error("Error updating progress:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const userProgress = await UserProgress.findOne({
      userId: session.user.email,
    });

    if (!userProgress) {
      return NextResponse.json({
        totalQuizzes: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        averageScore: 0,
        accuracy: 0,
        formattedStudyTime: "0m",
        lastActivity: null,
        recentActivity: [],
      });
    }

    // Get recent activity (last 5 quizzes)
    const recentActivity = userProgress.quizHistory
      .slice(-5)
      .reverse()
      .map(
        (quiz: {
          categoryId: string;
          quizId: string;
          score: number;
          totalQuestions: number;
          correctAnswers: number;
          completedAt: Date;
        }) => ({
          categoryId: quiz.categoryId,
          quizId: quiz.quizId,
          score: quiz.score,
          totalQuestions: quiz.totalQuestions,
          correctAnswers: quiz.correctAnswers,
          completedAt: quiz.completedAt,
        })
      );

    return NextResponse.json({
      totalQuizzes: userProgress.totalQuizzes,
      totalQuestions: userProgress.totalQuestions,
      correctAnswers: userProgress.correctAnswers,
      averageScore: userProgress.averageScore,
      accuracy: userProgress.accuracy,
      formattedStudyTime: userProgress.formattedStudyTime,
      lastActivity: userProgress.lastActivity,
      recentActivity,
    });
  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
