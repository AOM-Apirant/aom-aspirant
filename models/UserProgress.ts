import mongoose from "mongoose";

const UserProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    totalQuizzes: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      default: 0,
    },
    correctAnswers: {
      type: Number,
      default: 0,
    },
    totalScore: {
      type: Number,
      default: 0,
    },
    studyTime: {
      type: Number, // in minutes
      default: 0,
    },
    quizHistory: [
      {
        categoryId: String,
        quizId: String,
        score: Number,
        totalQuestions: Number,
        correctAnswers: Number,
        completedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate average score
UserProgressSchema.virtual("averageScore").get(function () {
  if (this.totalQuizzes === 0) return 0;
  return Math.round(this.totalScore / this.totalQuizzes);
});

// Calculate accuracy percentage
UserProgressSchema.virtual("accuracy").get(function () {
  if (this.totalQuestions === 0) return 0;
  return Math.round((this.correctAnswers / this.totalQuestions) * 100);
});

// Format study time
UserProgressSchema.virtual("formattedStudyTime").get(function () {
  const hours = Math.floor(this.studyTime / 60);
  const minutes = this.studyTime % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
});

export default mongoose.models.UserProgress ||
  mongoose.model("UserProgress", UserProgressSchema);
