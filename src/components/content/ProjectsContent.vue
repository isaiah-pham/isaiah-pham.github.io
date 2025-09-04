<template>
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <!-- ShipME Website -->
      <div class="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition text-left">
        <div class="flex justify-between items-start mb-1">
          <h3 class="text-xl font-semibold">ShipME Website</h3>
          <span class="text-gray-500 italic text-sm">Spring 2025 – Present</span>
        </div>
        <a
          href="https://shipmeapp.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline text-sm block mb-3"
        >
          shipmeapp.com
        </a>
        <p class="text-gray-600 mb-3">
          Asset management web app built for Clemson Mechanical Engineering students.
        </p>
        <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>Built using React, Vite, ExpressJS, and Docker in a team of 4.</li>
          <li>
            Implemented dashboard, requests, notifications, and settings (student + instructor
            views).
          </li>
          <li>Integrated Microsoft OAuth2 for authorized Clemson user logins.</li>
          <li>Used AWS email service for automated notifications and user settings.</li>
        </ul>
      </div>

      <!-- Data Visualizations Website -->
      <div class="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition text-left">
        <div class="flex justify-between items-start mb-1">
          <h3 class="text-xl font-semibold">Data Visualizations Website</h3>
          <span class="text-gray-500 italic text-sm">Spring 2020</span>
        </div>
        <a
          href="https://vizdata.weebly.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline text-sm block mb-3"
        >
          vizdata.weebly.com
        </a>
        <p class="text-gray-600">
          High school passion project using Google Charts and JavaScript to visualize sports data.
        </p>
      </div>
    </div>
  </div>
</template>
