const questions = [
    { id: 1,  topic: "arrays",               question: "What is an array?",                              answer: "A linear data structure that stores elements in contiguous memory locations and is accessed using indices." },
    { id: 2,  topic: "stacks",               question: "What is a stack?",                               answer: "A linear data structure that follows the Last In First Out (LIFO) principle." },
    { id: 3,  topic: "queue",                question: "What is a queue?",                               answer: "A linear data structure that follows the First In First Out (FIFO) principle." },
    { id: 4,  topic: "linked-lists",         question: "What is a linked list?",                         answer: "A linear data structure where elements are stored in nodes and each node points to the next node." },
    { id: 5,  topic: "complexity",           question: "What is the time complexity of binary search?",  answer: "O(log n)" },
    { id: 6,  topic: "trees",                question: "What is a binary tree?",                         answer: "A hierarchical data structure where each node has at most two children." },
    { id: 7,  topic: "hashmaps",             question: "What is a hash table?",                          answer: "A data structure that stores key-value pairs and uses a hash function for fast access." },
    { id: 8,  topic: "recursion",            question: "What is recursion?",                             answer: "A programming technique where a function calls itself to solve smaller instances of a problem." },
    { id: 9,  topic: "complexity",           question: "What is Big-O notation?",                        answer: "A notation used to describe the time or space complexity of an algorithm." },
    { id: 10, topic: "graphs",               question: "What is a graph in data structures?",            answer: "A non-linear data structure consisting of nodes (vertices) connected by edges." },
  
    { id: 11, topic: "linked-lists",         question: "What is a doubly linked list?",                  answer: "A linked list where each node has pointers to both the previous and next nodes." },
    { id: 12, topic: "linked-lists",         question: "What is a circular linked list?",                answer: "A linked list where the last node points back to the first node." },
    { id: 13, topic: "queue",                question: "What is a priority queue?",                      answer: "A queue where elements are removed based on priority rather than insertion order." },
    { id: 14, topic: "trees",                question: "What is a heap?",                                answer: "A specialized tree-based structure that satisfies the heap property." },
    { id: 15, topic: "trees",                question: "What is a max heap?",                            answer: "A heap where the parent node is greater than or equal to its children." },
    { id: 16, topic: "trees",                question: "What is a min heap?",                            answer: "A heap where the parent node is less than or equal to its children." },
    { id: 17, topic: "graphs",               question: "What is depth-first search (DFS)?",              answer: "A graph traversal algorithm that explores as far as possible along each branch before backtracking." },
    { id: 18, topic: "graphs",               question: "What is breadth-first search (BFS)?",            answer: "A graph traversal algorithm that explores all neighbors at the present depth before moving deeper." },
    { id: 19, topic: "dynamic-programming",  question: "What is dynamic programming?",                   answer: "An optimization technique that solves complex problems by storing results of subproblems." },
    { id: 20, topic: "dynamic-programming",  question: "What is memoization?",                           answer: "An optimization technique that stores the results of expensive function calls." },
  
    { id: 21, topic: "dynamic-programming",  question: "What is tabulation in dynamic programming?",     answer: "A bottom-up approach where solutions are built using a table." },
    { id: 22, topic: "graphs",               question: "What is a greedy algorithm?",                    answer: "An algorithm that makes the locally optimal choice at each step." },
    { id: 23, topic: "trees",                question: "What is a tree data structure?",                 answer: "A hierarchical structure with nodes connected by edges." },
    { id: 24, topic: "trees",                question: "What is a binary search tree (BST)?",            answer: "A binary tree where left child is smaller and right child is larger than the parent." },
    { id: 25, topic: "trees",                question: "What is an AVL tree?",                           answer: "A self-balancing binary search tree where the height difference is at most one." },
    { id: 26, topic: "trees",                question: "What is a red-black tree?",                      answer: "A self-balancing binary search tree with color properties to ensure balance." },
    { id: 27, topic: "hashmaps",             question: "What is hashing?",                               answer: "A technique to map data to a fixed-size value using a hash function." },
    { id: 28, topic: "hashmaps",             question: "What is collision in hashing?",                  answer: "When two keys produce the same hash value." },
    { id: 29, topic: "hashmaps",             question: "What is linear probing?",                        answer: "A collision resolution technique that checks the next slot in the table." },
    { id: 30, topic: "hashmaps",             question: "What is chaining in hashing?",                   answer: "A collision resolution technique using linked lists at each index." },
  
    { id: 31, topic: "sorting",              question: "What is merge sort?",                            answer: "A divide-and-conquer sorting algorithm that splits and merges arrays." },
    { id: 32, topic: "sorting",              question: "What is quick sort?",                            answer: "A divide-and-conquer sorting algorithm that uses a pivot to partition elements." },
    { id: 33, topic: "sorting",              question: "What is bubble sort?",                           answer: "A simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order." },
    { id: 34, topic: "sorting",              question: "What is selection sort?",                        answer: "A sorting algorithm that repeatedly selects the smallest element and moves it to the front." },
    { id: 35, topic: "sorting",              question: "What is insertion sort?",                        answer: "A sorting algorithm that builds the sorted array one element at a time." },
    { id: 36, topic: "complexity",           question: "What is the time complexity of merge sort?",     answer: "O(n log n)" },
    { id: 37, topic: "complexity",           question: "What is the worst-case complexity of quick sort?", answer: "O(n^2)" },
    { id: 38, topic: "sorting",              question: "What is a stable sorting algorithm?",            answer: "A sorting algorithm that maintains the relative order of equal elements." },
    { id: 39, topic: "sorting",              question: "What is in-place sorting?",                      answer: "A sorting algorithm that requires minimal additional memory." },
    { id: 40, topic: "arrays",               question: "What is a two-pointer technique?",               answer: "A technique that uses two indices to traverse data efficiently." },
  
    { id: 41, topic: "arrays",               question: "What is sliding window technique?",              answer: "A technique that reduces nested loops by maintaining a window over data." },
    { id: 42, topic: "recursion",            question: "What is backtracking?",                          answer: "An algorithmic technique that tries all possibilities and backtracks when needed." },
    { id: 43, topic: "trees",                question: "What is a trie?",                                answer: "A tree-like data structure used for efficient retrieval of strings." },
    { id: 44, topic: "graphs",               question: "What is topological sorting?",                   answer: "An ordering of vertices in a directed acyclic graph." },
    { id: 45, topic: "graphs",               question: "What is Dijkstra's algorithm?",                  answer: "An algorithm to find the shortest path from a source node to all other nodes." },
    { id: 46, topic: "graphs",               question: "What is Floyd-Warshall algorithm?",              answer: "An algorithm for finding shortest paths between all pairs of vertices." },
    { id: 47, topic: "graphs",               question: "What is a disjoint set?",                        answer: "A data structure that keeps track of elements partitioned into sets." },
    { id: 48, topic: "graphs",               question: "What is union-find?",                            answer: "An algorithm used to manage disjoint sets efficiently." },
    { id: 49, topic: "graphs",               question: "What is cycle detection in graphs?",             answer: "The process of determining whether a graph contains a cycle." },
    { id: 50, topic: "graphs",               question: "What is a directed acyclic graph (DAG)?",        answer: "A directed graph with no cycles." }
  ];
  
  // ── Generate a random question filtered by selected topic ──
  function generate() {
    const select = document.getElementById('topic-select');
    if (!select) {
      document.getElementById('output').innerHTML = "Error: Cannot find topic-select element!";
      return;
    }
  
    const selected = select.value;
    console.log("Selected value:", JSON.stringify(selected));
  
    const matching = questions.filter(q => q.topic === selected);
    console.log("Questions found for this topic:", matching.length);
    console.log("First matching question (if any):", matching[0]?.question || "none");
  
    let pool = matching.length > 0 ? matching : questions;
  
    const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
  
    document.getElementById('output').innerHTML = `
      <div style="color: #fbbf24; margin-bottom:8px;">
        Debug → Selected: "${selected}" | Found ${matching.length} questions
      </div>
      <strong>Q: ${randomQuestion.question}</strong><br><br>
      <em>(Topic: ${randomQuestion.topic})</em><br><br>
      <button onclick="revealAnswer(this)" data-answer="${randomQuestion.answer}">
        Reveal Answer
      </button>
    `;
  }
  function revealAnswer(btn) {
    const answer = btn.getAttribute('data-answer');
    if (!answer) {
        console.error("No answer attribute found");
        return;
    }

    // If answer already shown → remove it (toggle)
    const existing = btn.nextElementSibling;
    if (existing && existing.classList.contains('answer-revealed')) {
        existing.remove();
        btn.textContent = 'Reveal Answer';
        return;
    }

    const p = document.createElement('p');
    p.className = 'answer-revealed';
    p.textContent = 'Answer: ' + answer;
    p.style.marginTop = '12px';
    p.style.padding = '12px 16px';
    p.style.backgroundColor = '#064e3b';
    p.style.borderRadius = '8px';
    p.style.color = '#6ee7b7';
    p.style.fontSize = '1.05rem';
    p.style.lineHeight = '1.5';

    btn.insertAdjacentElement('afterend', p);

    // Optional: change button text after reveal
    btn.textContent = 'Hide Answer';
}