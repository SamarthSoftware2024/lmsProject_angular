import { Component } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  answer: string; // Correct answer
}

@Component({
  selector: 'app-gto',
  templateUrl: './gto.component.html',
  styleUrls: ['./gto.component.css']
})
export class GTOComponent {
  start: boolean = true;
  submit: boolean = false;
  previous: boolean = false;
  currentQuestionIndex: number = 0;
  userAnswers: { [index: number]: string } = {}; // To store user answers

  questions: Question[] = [
    {
      question: 'Who developed the Java programming language?',
      options: ['a) Microsoft', 'b) Oracle', 'c) Sun Microsystems', 'd) Google'],
      answer: 'c) Sun Microsystems'
    },
    {
      question: 'What was the original name for Java?',
      options: ['a) C++++', 'b) Oak', 'c) Pine', 'd) Maple'],
      answer: 'b) Oak'
    },
    {
      question: 'What does JVM stand for?',
      options: ['a) Java Version Machine', 'b) Java Virtual Mechanism', 'c) Java Verified Module', 'd) Java Virtual Machine'],
      answer: 'd) Java Virtual Machine'
    },
    {
      question: 'Which of the following is responsible for converting bytecode into machine code?',
      options: ['a) JDK', 'b) JRE', 'c) JVM', 'd) Java Compiler'],
      answer: 'c) JVM'
    },
    {
      question: 'What does the == operator compare in Java objects?',
      options: ['a) Values', 'b) References', 'c) Hash codes', 'd) Fields'],
      answer: 'b) References'
    },
    {
      question: 'Which operator is used for logical "AND" operation?',
      options: ['a) &&', 'b) &', 'c) ||', 'd) |'],
      answer: 'a) &&'
    },
    {
      question: 'Which of the following is a unary operator?',
      options: ['a) +', 'b) -', 'c) !', 'd) None of the above'],
      answer: 'd) None of the above'
    },
    {
      question: 'Which of the following is not a primitive data type in Java?',
      options: ['a) byte', 'b) String', 'c) double', 'd) short'],
      answer: 'b) String'
    },
    {
      question: 'What is the default value of the int data type?',
      options: ['a) 0', 'b) 1', 'c) null', 'd) undefined'],
      answer: 'a) 0'
    },
    {
      question: "What's the main difference between int and Integer in Java?",
      options: ['a) No difference', 'b) Integer can store larger values than int', 'c) int is a primitive data type, while Integer is a class', 'd) int can be null, while Integer cannot'],
      answer: 'c) int is a primitive data type, while Integer is a class'
    }
  ];

  startTest() {
    this.start = true;
    this.currentQuestionIndex = 0; // Reset to first question
    this.userAnswers = {}; // Reset user answers
  }

  submitTest() {
    const correctAnswersCount = this.getCorrectAnswersCount();
    if (correctAnswersCount >= 7) {
      alert("Submit success! You answered " + correctAnswersCount + " questions correctly.");
      this.start = false;
    } else {
      alert("Not enough correct answers to submit. You need at least 7 correct answers.");
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
    this.updateButtonVisibility();
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
    this.updateButtonVisibility();
  }

  updateButtonVisibility() {
    this.previous = this.currentQuestionIndex > 0;
    this.submit = this.currentQuestionIndex === this.questions.length - 1;
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  // Get the count of correct answers
  private getCorrectAnswersCount(): number {
    let correctCount = 0;
    this.questions.forEach((question, index) => {
      if (this.userAnswers[index] === question.answer) {
        correctCount++;
      }
    });
    return correctCount;
  }

  // Track the selected answer for the current question
  onAnswerChange(option: string) {
    this.userAnswers[this.currentQuestionIndex] = option;
  }
}
