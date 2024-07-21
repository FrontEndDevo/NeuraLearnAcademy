
# NeuraLearn Academy

NeuraLearn Academy is an innovative educational platform leveraging generative AI and Large Language Models (LLMs) to enhance online learning experiences. This platform introduces new workflows utilizing AI technologies, benefiting both instructors and students. The primary objective of NeuraLearn Academy is to revolutionize online learning by integrating generative AI and LLMs.

## Features

- **Question Generation**: Utilizes deep learning systems to facilitate the generation of insightful questions, enhancing teaching effectiveness.
- **Summarization**: Provides concise summaries of video transcripts, aiding in content comprehension.
- **Interactive Educational Chats**: Employs Retrieval-Augmented Generation (RAG) architecture for dynamic interactions.
- **Personalized Knowledge Assessment**: Tailors assessments to each student's understanding and learning pace.
- **Iterative Learning Journey**: Ensures structured progression through the course material.

## Advantages of Online Learning

- **Efficiency**: Delivers lessons using tools such as videos and PDFs.
- **Accessibility**: Allows students to attend classes from any location, breaking geographical barriers.
- **Affordability**: More cost-effective compared to traditional learning methods.
- **Adaptability**: Caters to diverse learning styles, accommodating visual, auditory, and independent learners.

## Disadvantages of Online Learning

- **Lack of Personal Interaction**: Misses face-to-face interaction between students and instructors.
- **Limited Hands-On Experience**: Struggles to provide adequate hands-on experience for certain disciplines.
- **Variable Interactivity**: Engagement levels may vary despite interactive elements like discussion forums and virtual classrooms.
- **Assessment Methods**: Relies heavily on digital assessments, lacking the blend of digital and traditional methods.

## Role of Generative AI

Generative AI is transforming education by creating personalized, engaging experiences for students. NeuraLearn Academy leverages this technology to enhance interactivity, overcome the lack of personal interaction, and provide a more immersive learning experience.

## Problem Solution

Generative AI focuses on creating new content, such as images or text. Language models, a subset of AI, understand and generate human-like language, making them suitable for tasks like machine translation, text summarization, and text completion. NeuraLearn Academy uses these models for generating questions and summarizing video transcripts to improve educational interactions.

## Integration with Platform

The trained question-answering model is seamlessly integrated into the educational platform. Features include:

- User-friendly interface for submitting questions or feedback.
- Dynamic responses based on the context of questions and feedback.
- Interactive platforms or chatbots for a personalized learning experience.

## Motivation

The integration of Machine Learning into NeuraLearn Academy aims to revolutionize traditional educational methods and improve the overall learning experience.

## Comprehensive Understanding

**Goal**: Ensure comprehensive understanding of each chapter.

**Method**: Post-chapter feedback mechanism where students interact with ChatGPT to clarify uncertainties before progressing.

## Personalized Knowledge Assessment

**Goal**: Tailor assessments to each student's understanding.

**Method**: Dynamic quiz model that adapts to individual progress.

## Summarization for Reinforcement

**Goal**: Reinforce learning through concise summarization.

**Method**: Summarization model that extracts key points from each chapter, generating a PDF with both textual and visual summaries.

## Iterative Learning Journey

**Goal**: Facilitate a structured learning journey.

**Method**: Restructure the course format to unlock subsequent chapters only after understanding the previous chapter.

## Continuous Improvement Feedback Loop

**Goal**: Establish a continuous improvement feedback loop.

**Method**: Gather and utilize student feedback to enhance the platform.

## Performance Metrics

- **Question Generation Model**: Achieved ROUGE scores of 40% (ROUGE-1), 20% (ROUGE-2), and 39% (ROUGE-L).
- **Summarization Model**: Excelled on the BookSum benchmark with scores of 33% (ROUGE-1), 5.2% (ROUGE-2), 23% (ROUGE-L), and 29.977% (ROUGE-LSUM).

## Project Limitations

The primary limitation is ensuring the precise evaluation of students' comprehension within the platform. Despite challenges in achieving absolute accuracy, the focus remains on improving subjective assessments.

## Data Collection

### General Data Requirements

Creating a quiz requires meticulous data collection and a clear understanding of the requirements to ensure that the questions generated are relevant, challenging, and beneficial for users.

### Data Quality and Validation

- **Accuracy**: Ensure the correctness of the data collected.
- **Relevance**: The data must be pertinent to the topics covered.
- **Completeness**: All necessary data points should be collected to generate comprehensive questions.
- **Consistency**: Standardize the format and structure of data for uniformity.
- **Verification**: Cross-check data with multiple sources and validate through Subject Matter Experts (SMEs).

### Question Generation Data Schema

To effectively generate and manage quiz questions, a well-defined schema is essential. This schema includes fields for context, difficulty level, question type, the question itself, choices (for MCQs), and the answer.

#### Data Schema Overview

- **Context**: Description of the reference or source from which the question is derived.
- **Level**: Indicates the difficulty level of the question.
- **Type**: Specifies the format of the question (MCQ, Bool, Open).
- **Question**: The actual question text.
- **Choices**: Possible answers for Multiple Choice Questions (MCQs).
- **Answer**: The correct answer to the question.

## Modeling

### Background and Literature Review

#### Literature Review

The literature review examines several papers published between 2017-2021 based on Automatic question generation and answer assessment: a survey that addresses different aspects of automatic question generation and answer assessment. Here’s an expanded overview:

- **Deena et al. (2020)**: Developed a method for generating subjective questions dynamically using NLP techniques and Bloom’s taxonomy.
- **Das et al. (2019)**: Focused on generating fill-in-the-blank questions automatically using corpus-based distractors for e-assessment.
- **Klein and Nabi (2019)**: Explored the use of advanced language models like GPT-2 and BERT for question generation and answering.
- **Carmichael et al. (2018)**: Assessed the impact of educational video on student engagement, critical thinking, and learning.
- **Du et al. (2017)**: Presented a neural approach to question generation for reading comprehension using an encoder-decoder framework.

#### Main Challenges

- Informative-Simple-Sentence Extraction
- Question Generation from Multiple Sentences
- Short and Long-Type Answer Assessment
- Answer Assessment Standard
- Question Generation and Assessment from Video Lectures
- Question Generation and Assessment Using Machine Learning
- Visual Question-Answer Generation
- Automated Evaluation of Subjective Questions

## LLMs (Large Language Models)

LLMs such as GPT (Generative Pre-trained Transformer) are pivotal in natural language processing. These models are trained on large-scale datasets using unsupervised learning techniques before fine-tuning on specific tasks.

### Training Process

LLMs are typically pre-trained using a variant of the Transformer architecture. The training process involves:

- Pre-training on Large Corpora
- Objective Functions during pre-training
- Fine-tuning on specific tasks

## Future Work

### Machine Learning

#### Token Generation Latency Reduction and Inference Speed Improvement

- Explore novel algorithms and optimization techniques to minimize the time required for generating tokens during model inference.
- Investigate hardware acceleration methods, such as using GPUs or TPUs, to enhance inference speed.
- Optimize existing machine learning models and architectures to reduce computational overhead and improve efficiency.

#### Architecture for Visual Question Generation

- Design and develop a new model architecture that combines diffusion models and autoregressive language models for generating questions based on visual inputs.
- Conduct experiments to evaluate the performance and accuracy of the combined model in various visual question answering tasks.

#### Evaluation Metric for Question Generation Accuracy

- Develop a comprehensive evaluation metric that accurately measures the quality and relevance of generated questions.
- Incorporate aspects such as linguistic coherence, contextual appropriateness, and informativeness into the new metric.
- Validate the metric through extensive testing and comparison with existing evaluation methods.

#### Quality Improvement of Transcripts

- Develop advanced techniques to enhance the accuracy and clarity of transcriptions produced by machine learning models.
- Implement noise reduction algorithms and context-aware correction mechanisms to improve transcript quality.
- Test and refine these techniques through rigorous evaluation against benchmark datasets.

### Frontend

#### User Interface Design Improvement

- Redesign the user interface to make it more intuitive and user-friendly.
- Conduct user testing sessions to gather feedback and iteratively improve the design.
- Utilize modern design principles and frameworks to enhance the overall visual appeal and functionality.

#### Usability and Accessibility Enhancement

- Implement features that improve the usability of the system for users with varying levels of technical expertise.
- Ensure compliance with accessibility standards, such as WCAG, to make the system accessible to users with disabilities.

#### Support for Dark Mode and Customizable Themes

- Develop a dark mode option to reduce eye strain and improve user experience in low-light environments.
- Allow users to customize the theme of the application to suit their personal preferences.
- Ensure that all interface elements are compatible with the dark mode and customizable themes.

#### Integration of Interactive Elements

- Add interactive features, such as drag-and-drop functionality, to enhance user interaction and engagement.
- Test and refine these features to ensure they are intuitive and responsive.

#### Support for the Arabic Language

- Implement localization support to provide an Arabic language option for users.
- Ensure that all interface elements, including text and layout, are appropriately adapted for right-to-left (RTL) language support.

### Backend

#### Implementation of Online Payment Methods

- Integrate secure and reliable online payment gateways to facilitate transactions.
- Ensure compliance with relevant financial regulations and security standards.

#### Support for the Arabic Language

- Implement backend support for Arabic language processing and storage.
- Ensure that database schemas and application logic accommodate multilingual data.

#### Real-time Notifications for User Activities

- Develop a real-time notification system to alert users of important activities and updates.
- Use technologies such as WebSockets or push notifications to ensure timely delivery of notifications.

#### Enhanced Security Measures

- Strengthen security protocols to protect user data from breaches and unauthorized access.
- Implement advanced encryption methods and regular security audits.

#### Caching Mechanisms to Reduce Server Load

- Implement caching strategies to store frequently accessed data and reduce server load.
- Use technologies such as Redis or Memcached to optimize performance.

#### Scalable Architecture to Handle Increased Traffic

- Design and implement a scalable backend architecture that can handle increased user traffic and data volume.
- Utilize cloud services and load balancing techniques to ensure high availability and performance.

## Conclusion

NeuraLearn Academy represents a significant advancement in online education, leveraging the power of generative AI and Large Language Models (LLMs) to create a more interactive and personalized learning experience. The project addressed key challenges in traditional online learning platforms, such as limited interactivity and lack of personal engagement, by integrating cutting-edge AI technologies.

Key achievements of the project include:

1. Development of an innovative question generation model, which demonstrated strong performance with ROUGE scores of 40% in ROUGE-1, 20% in ROUGE-2, and 39% in ROUGE-L. This model enhances the learning experience by generating relevant and diverse questions from course materials.
   
2. Implementation of a summarization model that excelled on the BookSum benchmark, achieving scores of 33% in ROUGE-1, 5.2% in ROUGE-2, 23% in ROUGE-L, and 29.977% in ROUGE-LSUM. This feature aids in reinforcing key concepts and providing concise overviews of course content.
   
3. Integration of Retrieval-Augmented Generation (RAG) architecture, enabling interactive educational chats that foster deeper understanding and engagement with course material.
   
4. Creation of a comprehensive platform that caters to both instructors and students, providing tools for course creation, content management, and personalized learning experiences.

For further details, you can [read the full report](https://drive.google.com/file/d/1_EpYBy0Nzaf6uk7IdpwdEP1FxsJcD_YL/view?usp=sharing).

# NeuraLearn Academy

NeuraLearn Academy is an innovative educational platform leveraging generative AI and Large Language Models (LLMs) to enhance online learning experiences. This platform introduces new workflows utilizing AI technologies, benefiting both instructors and students. The primary objective of NeuraLearn Academy is to revolutionize online learning by integrating generative AI and LLMs.

## Introduction

### Image 1: Home Page

![Home Page](https://drive.google.com/uc?id=1hWpQUGVnVQwUpozQl0YhTpJkJC8A0Zp_)

Description of Image 1: This image showcases the home page and basic features of neuralLearnAcdemy.

### Image 2: Home Page

![Home Page](https://drive.google.com/uc?id=1OE_iVqjHAIahthUh0JNsXMh31Bwo-RK5)

Description of Image 1: This image showcases the home page and basic features of neuralLearnAcdemy.

### Image 3: Home Page

![Home Page](https://drive.google.com/uc?id=1jj0It-dz8ci3FON9VVy-jlNF_1Yl7L33)

Description of Image 1: This image showcases the home page and basic features of neuralLearnAcdemy.

### Image 4: Home Page

![Home Page](https://drive.google.com/uc?id=1T5odQz4LVjA4TJzPquYrn5h7YplXCwgX)

Description of Image 1: This image showcases the home page and basic features of neuralLearnAcdemy.

### Image 5: Sign Up

![Sign Up](https://drive.google.com/uc?id=1wxyz9876543210)

Description of Image 5: Shows the structured progression through the course material, ensuring comprehensive learning.
