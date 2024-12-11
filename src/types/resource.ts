export type ResourceType = 'folder' | 'video' | 'article' | 'github' | 'document'

export interface Resource {
  id: string
  name: string
  type: ResourceType
  url?: string
  children?: Resource[]
}

export const resourceData: Resource = {
  id: 'root',
  name: 'Machine Learning Resources',
  type: 'folder',
  children: [
    {
      id: 'research-papers',
      name: 'Research Papers',
      type: 'folder',
      children: [
        {
          id: 'ilya-30u30',
          name: 'Ilya 30u30',
          type: 'folder',
          children: [
            {
              id: 'harvard-annotated-transformer',
              name: 'The Annotated Transformer',
              type: 'article',
              url: 'https://nlp.seas.harvard.edu/annotated-transformer/'
            },
            {
              id: 'harvard-first-law-of-complexodynamics',
              name: 'The First Law of Complexodynamics',
              type: 'article',
              url: 'https://scottaaronson.blog/?p=762'
            },
            {
              id: 'karpathy-rnn-effectiveness',
              name: 'The Unreasonable Effectiveness of RNNs',
              type: 'article',
              url: 'https://karpathy.github.io/2015/05/21/rnn-effectiveness/'
            },
            {
              id: 'colah-lstm',
              name: 'Understanding LSTM Networks',
              type: 'article',
              url: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/'
            },
            {
              id: 'zaremba-recurrent-neural-network-regularization',
              name: 'Recurrent Neural Network Regularization',
              type: 'document',
              url: 'https://arxiv.org/pdf/1409.2329'
            },
            {
              id: 'hinton-keeping-neural-networks-simple',
              name: 'Keeping Neural Networks Simple by Minimizing the Description Length of the Weights',
              type: 'document',
              url: 'https://www.cs.toronto.edu/~hinton/absps/colt93.pdf'
            },
            {
              id: 'vinyals-pointer-networks',
              name: 'Pointer Networks',
              type: 'document',
              url: 'https://arxiv.org/pdf/1506.03134'
            },
            {
              id: 'krizhevsky-alexnet',
              name: 'ImageNet Classification with Deep CNNs',
              type: 'document',
              url: 'https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf'
            },
            {
              id: 'vinyals-order-matters',
              name: 'Order Matters: Sequence to sequence for sets',
              type: 'document',
              url: 'https://arxiv.org/pdf/1511.06391'
            },
            {
              id: 'huang-gpipe',
              name: 'GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism',
              type: 'document',
              url: 'https://arxiv.org/pdf/1811.06965'
            },
            {
              id: 'he-residual-learning',
              name: 'Deep Residual Learning for Image Recognition',
              type: 'document',
              url: 'https://arxiv.org/pdf/1512.03385'
            },
            {
              id: 'yu-multi-scale-context-aggregation',
              name: 'Multi-Scale Context Aggregation by Dilated Convolutions',
              type: 'document',
              url: 'https://arxiv.org/pdf/1511.07122'
            },
            {
              id: 'schutt-neural-quantum-chemistry',
              name: 'Neural Quantum Chemistry',
              type: 'document',
              url: 'https://arxiv.org/pdf/1704.01212'
            },
            {
              id: 'vaswani-attention',
              name: 'Attention Is All You Need',
              type: 'document',
              url: 'https://arxiv.org/pdf/1706.03762'
            },
            {
              id: 'bahdanau-machine-translation',
              name: 'Neural Machine Translation by Jointly Learning to Align and Translate',
              type: 'document',
              url: 'https://arxiv.org/pdf/1409.0473'
            },
            {
              id: 'he-identity-mappings',
              name: 'Identity Mappings in Deep Residual Networks',
              type: 'document',
              url: 'https://arxiv.org/pdf/1603.05027'
            },
            {
              id: 'santoro-simple-nn-module',
              name: 'A Simple NN Module for Relational Reasoning',
              type: 'document',
              url: 'https://arxiv.org/pdf/1706.01427'
            },
            {
              id: 'santoro-variational-lossy-autoencoder',
              name: 'Variational Lossy Autoencoder',
              type: 'document',
              url: 'https://arxiv.org/pdf/1611.02731'
            },
            {
              id: 'santoro-relational-rnns',
              name: 'Relational RNNs',
              type: 'document',
              url: 'https://arxiv.org/pdf/1806.01822'
            },
            {
              id: 'santoro-coffee-automaton',
              name: 'Quantifying the Rise and Fall of Complexity in Closed Systems: The Coffee Automaton',
              type: 'document',
              url: 'https://arxiv.org/pdf/1405.6903'
            },
            {
              id: 'santoro-neural-turing-machines',
              name: 'Neural Turing Machines',
              type: 'document',
              url: 'https://arxiv.org/pdf/1410.5401'
            },
            {
              id: 'santoro-deep-speech-2',
              name: 'Deep Speech 2: End-to-End Speech Recognition in English and Mandarin',
              type: 'document',
              url: 'https://arxiv.org/pdf/1512.02595'
            },
            {
              id: 'santoro-scaling-laws',
              name: 'Scaling Laws for Neural LMs',
              type: 'document',
              url: 'https://arxiv.org/pdf/2001.08361'
            },
            {
              id: 'santoro-mdl',
              name: 'A Tutorial Introduction to the Minimum Description Length Principle',
              type: 'document',
              url: 'https://arxiv.org/pdf/math/0406077'
            },
            {
              id: 'santoro-machine-super-intelligence',
              name: 'Machine Super Intelligence',
              type: 'document',
              url: 'http://www.vetta.org/documents/Machine_Super_Intelligence.pdf'
            },
            {
              id: 'santoro-kolmogorov-complexity',
              name: 'Kolmogorov Complexity and Algorithmic Randomness',
              type: 'document',
              url: 'https://www.lirmm.fr/~ashen/kolmbook-eng-scan.pdf'
            },
            {
              id: 'santoro-cs231n',
              name: 'CS231n Convolutional Neural Networks for Visual Recognition',
              type: 'article',
              url: 'https://cs231n.github.io/'
            },
          ]
        },
        {
          id: 'papers-in-100-lines-of-code',
          name: 'Papers in 100 Lines of Code',
          type: 'github',
          url: 'https://github.com/MaximeVandegar/Papers-in-100-Lines-of-Code'
        },
        {
          id: 'math-ml-framework',
          name: 'A Mathematical Framework for Transformer Circuits',
          type: 'article',
          url: 'https://transformer-circuits.pub/2021/framework/index.html'
        },
        {
          id: 'attention-is-all-you-need',
          name: 'Attention Is All You Need',
          type: 'document',
          url: 'https://arxiv.org/pdf/1706.03762'
        },
        {
          id: 'neural-networks-nlp',
          name: 'Neural Networks and Neural Language Models',
          type: 'document',
          url: 'https://web.stanford.edu/~jurafsky/slp3/7.pdf'
        },
        {
          id: 'bengio2003neural',
          name: 'A Neural Probabilistic Language Model',
          type: 'document',
          url: 'https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf'
        },
        {
          id: 'walt2011numpy',
          name: 'The NumPy array: a structure for efficient numerical computation',
          type: 'document',
          url: 'https://arxiv.org/pdf/1102.1523'
        },
        {
          id: 'breiman2001random',
          name: 'Random Forests',
          type: 'document',
          url: 'https://link.springer.com/content/pdf/10.1023/a:1010933404324.pdf'
        },
        {
          id: 'breiman-two-cultures',
          name: 'Statistical Modeling: The Two Cultures',
          type: 'document',
          url: 'https://www2.math.uu.se/~thulin/mm/breiman.pdf'
        },
        {
          id: 'llama3-herd',
          name: 'The Llama 3 Herd of Models',
          type: 'document',
          url: 'https://arxiv.org/pdf/2407.21783'
        },
        {
          id: 'lecun-98',
          name: 'Gradient-based learning applied to document recognition',
          type: 'document',
          url: 'https://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf'
        },
        {
          id: 'shannon-38',
          name: 'A Symbolic Analysis of Relay and Switching Circuits',
          type: 'document',
          url: 'https://drive.google.com/file/d/1m3JwmCZqWg1IP607I5gbpsJDQBIDwcz9/view'
        },
        {
          id: 'mcculloch-pitts-43',
          name: 'A Logical Calculus of the Ideas Immanent in Nervous Activity',
          type: 'document',
          url: 'https://www.cs.cmu.edu/~./epxing/Class/10715/reading/McCulloch.and.Pitts.pdf'
        },
        {
          id: 'turing-1948',
          name: 'Intelligent Machinery',
          type: 'document',
          url: 'https://ia801703.us.archive.org/23/items/turing1948/turing1948_text.pdf'
        },
        {
          id: 'rumelhart-1986',
          name: 'Learning representations by back-propagating errors',
          type: 'document',
          url: 'https://github.com/georgezoto/Convolutional-Neural-Networks/blob/master/Papers/1986%20Backpro%20Learning%20representations%20by%20back-propagating%20errors%20-%20Rumelhart,%20Hinton,%20Williams.pdf'
        },
        {
          id: 'shannon-1950',
          name: 'Programming a Computer for Playing Chess',
          type: 'document',
          url: 'https://archive.computerhistory.org/projects/chess/related_materials/text/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon.062303002.pdf'
        },
        {
          id: 'rosenblatt-1957',
          name: 'Perceptron',
          type: 'document',
          url: 'https://bpb-us-e2.wpmucdn.com/websites.umass.edu/dist/a/27637/files/2016/03/rosenblatt-1957.pdf'
        },
        {
          id: 'shannon-1948',
          name: 'A Mathematical Theory of Communication',
          type: 'document',
          url: 'https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf'
        },
        {
          id: 'bahdanau-2014',
          name: 'Neural Machine Translation by Jointly Learning to Align and Translate',
          type: 'document',
          url: 'https://arxiv.org/pdf/1409.0473'
        },
        {
          id: 'luong-2015',
          name: 'Effective Approaches to Attention-based Neural Machine Translation',
          type: 'document',
          url: 'https://arxiv.org/pdf/1508.04025'
        },
        {
          id: 'sutskever-2014',
          name: 'Sequence to Sequence Learning with Neural Networks',
          type: 'document',
          url: 'https://arxiv.org/pdf/1409.3215'
        },
        {
          id: 'shlens-2014',
          name: 'A Tutorial on Principal Component Analysis',
          type: 'document',
          url: 'https://arxiv.org/pdf/1404.1100'
        },
        {
          id: 'devlin-2018',
          name: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
          type: 'document',
          url: 'https://arxiv.org/pdf/1810.04805'
        },
        {
          id: 'badue-2020',
          name: 'Self-Driving Cars: A Survey',
          type: 'document',
          url: 'https://arxiv.org/pdf/1901.04407'
        },
        {
          id: 'graves-2013',
          name: 'Generating Sequences With Recurrent Neural Networks',
          type: 'document',
          url: 'https://arxiv.org/pdf/1308.0850'
        },
        {
          id: 'weston-2014',
          name: 'Memory Networks',
          type: 'document',
          url: 'https://arxiv.org/pdf/1410.3916'
        },
        {
          id: 'memory-bank',
          name: 'MemoryBank: Enhancing Large Language Models with Long-Term Memory',
          type: 'document',
          url: 'https://arxiv.org/pdf/2305.10250'
        },
        {
          id: 'ruder-2016',
          name: 'An overview of gradient descent optimization algorithms',
          type: 'document',
          url: 'https://arxiv.org/pdf/1609.04747'
        },

      ]
    },
    {
      id: 'blogs',
      name: 'Blogs',
      type: 'folder',
      children: [
        {
          id: 'rsrch.space',
          name: 'rsrch.space',
          type: 'article',
          url: 'https://rsrch.space/'
        },
        {
          id: 'karpathy-blog',
          name: 'Andrej Karpathy',
          type: 'article',
          url: 'https://karpathy.github.io/'
        },
        {
          id: 'lilian-blog',
          name: 'Lilian Weng',
          type: 'article',
          url: 'https://lilianweng.github.io/'
        },
        {
          id: 'colah-blog',
          name: 'Christopher Olah - colah',
          type: 'article',
          url: 'https://colah.github.io/'
        },
        {
          id: 'huyen-blog',
          name: 'Chip Huyen',
          type: 'article',
          url: 'https://huyenchip.com/blog/'
        },
        {
          id: 'eugeneyan-blog',
          name: 'Eugene Yan- eugeneyan',
          type: 'article',
          url: 'https://eugeneyan.com/writing/'
        },
        {
          id: 'sebastian-blog',
          name: 'Sebastian Raschka',
          type: 'article',
          url: 'https://sebastianraschka.com/blog/'
        },
        {
          id: 'himanshu-blog',
          name: 'himanshu',
          type: 'article',
          url: 'https://lunar-joke-35b.notion.site/Intuition-and-Insights-122ba4b6a3fa8086b561e4069da59cf4'
        },
        {
          id: 'cneuralnetwork-blog',
          name: 'cneuralnetwork',
          type: 'article',
          url: 'https://cneuralnets.netlify.app/blogs'
        },
        {
          id: 'siboehm-blog',
          name: 'siboehm',
          type: 'article',
          url: 'https://siboehm.com/'
        },
        {
          id: 'matdmiller-blog',
          name: 'Mat Miller',
          type: 'article',
          url: 'https://blog.matdmiller.com/'
        },
        {
          id: 'atcold-blog',
          name: 'Alfredo Canziani',
          type: 'article',
          url: 'https://atcold.github.io/blog.html'
        },
        {
          id: 'maharshi-blog',
          name: 'maharshi',
          type: 'article',
          url: 'https://maharshi.bearblog.dev/blog/'
        },
        {
          id: 'naklecha-blog',
          name: 'naklecha',
          type: 'article',
          url: 'https://www.naklecha.com/'
        },
        {
          id: 'gdb-blog',
          name: 'Greg Brockman',
          type: 'article',
          url: 'https://blog.gregbrockman.com/'
        },
        {
          id: 'nielsen-blog',
          name: 'Michael Nielsen',
          type: 'article',
          url: 'https://michaelnotebook.com/index.html'
        },
        {
          id: 'saurabh-blog',
          name: 'saurabh',
          type: 'article',
          url: 'https://saurabhai.com/blogs/blogs'
        },
        {
          id: 'florian-blog',
          name: 'Florian Hartmann',
          type: 'article',
          url: 'https://florian.github.io/'
        },
        {
          id: 'alexandru-blog',
          name: 'Alexandru Burlacu',
          type: 'article',
          url: 'https://alexandruburlacu.github.io/'
        },
        {
          id: 'yash-blog',
          name: 'Yash Shah',
          type: 'article',
          url: 'https://yashshahh.notion.site/Applied-AI-Resources-7c1d4e6dc38f4964874e2fece1705a13'
        },
        {
          id: 'denny-blog',
          name: 'Denny Britz',
          type: 'article',
          url: 'https://dennybritz.com/'
        },
        {
          id: 'bair-blog',
          name: 'bair blog',
          type: 'article',
          url: 'https://bair.berkeley.edu/blog/'
        },
        {
          id: 'openai-blog',
          name: 'openai blog',
          type: 'article',
          url: 'https://openai.com/news/research/'
        },
        {
          id: 'google-blog',
          name: 'google research',
          type: 'article',
          url: 'https://research.google/blog/'
        },
        {
          id: 'jalammar-blog',
          name: 'Jay Alammar',
          type: 'article',
          url: 'https://jalammar.github.io/'
        },
        {
          id: 'inference-blog',
          name: 'inFERENCe',
          type: 'article',
          url: 'https://www.inference.vc/'
        },
        {
          id: 'mlif-blog',
          name: 'mlif',
          type: 'article',
          url: 'https://www.machinelearningisfun.com/'
        },
        {
          id: 'vgel-blog',
          name: 'VGEL Blog',
          type: 'article',
          url: 'https://vgel.me/posts/'
        },
        {
          id: 'jaykmody-blog',
          name: 'Jay Mody',
          type: 'article',
          url: 'https://jaykmody.com/blog/gpt-from-scratch/'
        },
        {
          id: 'finbarr-blog',
          name: 'Finbarr Timbers',
          type: 'article',
          url: 'https://finbarr.ca/blog/'
        },
        {
          id: 'mastery-blog',
          name: 'Machine Learning Mastery',
          type: 'article',
          url: 'https://machinelearningmastery.com/'
        },
      ]
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning',
      type: 'folder',
      children: [

        {
          id: 'books',
          name: 'Books',
          type: 'folder',
          children: [
            {
              id: 'deeplearningbook-2016',
              name: 'Deep Learning - Ian Goodfellow',
              type: 'article',
              url: 'https://www.deeplearningbook.org/'
            },
            {
              id: 'udlbook',
              name: 'Understanding Deep Learning',
              type: 'article',
              url: 'https://udlbook.github.io/udlbook/'
            },
            {
              id: 'lbdl',
              name: 'The Little Book of Deep Learning',
              type: 'article',
              url: 'https://fleuret.org/public/lbdl.pdf'
            },
            {
              id: 'grokking-deep-learning',
              name: 'Grokking Deep Learning',
              type: 'article',
              url: 'https://cdn.ttgtmedia.com/rms/pdf/grokking_deep_learning.pdf'
            },
            {
              id: 'fastai-deep-learning-book',
              name: 'Practical Deep Learning for Coders - fastai',
              type: 'article',
              url: 'https://course.fast.ai/Resources/book.html'
            },
            {
              id: 'meta-learning',
              name: 'Meta Learning - How To Learn Deep Learning And Thrive In The Digital Age',
              type: 'article',
              url: 'https://studylib.net/doc/26113326/radek-osmulski---meta-learning--how-to-learn-deep-learnin...'
            },
            {
              id: 'itprnn',
              name: 'David MacKay - Information Theory, Inference, and Learning Algorithms',
              type: 'document',
              url: 'https://www.inference.org.uk/itprnn/book.pdf'
            },
          ]
        },
        {
          id: 'courses',
          name: 'Courses',
          type: 'folder',
          children: [
            {
              id: 'deeplearningai',
              name: 'DeepLearning.AI',
              type: 'video',
              url: 'https://deeplearning.ai/'
            },
            {
              id: 'nyudl',
              name: 'NYU Deep Learning - Yann LeCun',
              type: 'article',
              url: 'https://atcold.github.io/NYU-DLSP21/'
            },
            {
              id: 'mathematics-of-neural-networks-and-deep-learning',
              name: 'The Complete Mathematics of Neural Networks and Deep Learning',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=Ixl3nykKG9M'
            },
            {
              id: 'intro-to-deep-learning-sr',
              name: 'Intro to Deep Learning - Sebastian Raschka',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLTKMiZHVd_2KJtIXOW0zFhFfBaJJilH51'
            },
            {
              id: 'fastai-deep-learning-course',
              name: 'Practical Deep Learning for Coders - fastai',
              type: 'video',
              url: 'https://course.fast.ai/'
            },
            {
              id: 'fsdl',
              name: 'Full Stack Deep Learning - 2022',
              type: 'article',
              url: 'https://fullstackdeeplearning.com/course/2022/'
            },
            {
              id: 'david-mackay-info-theory-pattern-recognition-and-neural-networks',
              name: 'David MacKay - Information Theory, Pattern Recognition, and Neural Networks',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLruBu5BI5n4aFpG32iMbdWoRVAA-Vcso6'
            },
            {
              id: 'cs182-deep-learning',
              name: 'UC Berkeley CS 182: Deep Learning',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A'
            },
            {
              id: 'mit-dl',
              name: 'MIT - Introduction to Deep Learning',
              type: 'video',
              url: 'https://introtodeeplearning.com/'
            },
            {
              id: 'stanford-cs231n',
              name: 'CS231n - Deep Learning for Computer Vision',
              type: 'video',
              url: 'https://cs231n.stanford.edu/'
            },
            {
              id: 'cs224d',
              name: 'CS224d: Deep Learning for Natural Language Processing',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PL4PDl8a0S5tvphRVF45G8B7z0pDO6MT7C'
            },
          ]
        },
        {
          id: 'cnn',
          name: 'CNN',
          type: 'folder',
          children: [
            {
              id: 'cnn-mathematical-intuition',
              name: 'CNN from Scratch with pure  Mathematical Intuition',
              type: 'article',
              url: 'https://lunar-joke-35b.notion.site/CNN-from-Scratch-with-pure-Mathematical-Intuition-a201ef0ca1314058a1707a3ae260981e'
            },
            {
              id: 'cnn-guide',
              name: 'Convolutional Neural Network (CNN): A Complete Guide',
              type: 'article',
              url: 'https://learnopencv.com/understanding-convolutional-neural-networks-cnn/'
            },
            {
              id: 'cnn-explainer',
              name: 'CNN Explainer',
              type: 'article',
              url: 'https://poloclub.github.io/cnn-explainer/'
            },
            {
              id: 'convnetjs',
              name: 'ConvNetJS - Deep Learning in your browser',
              type: 'article',
              url: 'https://cs.stanford.edu/people/karpathy/convnetjs/index.html'
            },
            {
              id: 'cnn-visualization',
              name: 'Convolutional Neural Networks Explained (CNN Visualized)',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=pj9-rr1wDhM'
            },
            {
              id: 'cnns-from-different-viewpoints',
              name: 'CNNs from different viewpoints',
              type: 'article',
              url: 'https://cs231n.github.io/understanding-cnn/'
            },
            {
              id: 'image-kernels',
              name: 'Image Kernels',
              type: 'article',
              url: 'https://setosa.io/ev/image-kernels/'
            },
            {
              id: 'visualizing-what-convnets-learn',
              name: 'Visualizing what ConvNets learn',
              type: 'article',
              url: 'https://cs231n.github.io/understanding-cnn/'
            },
            {
              id: 'convolutions-in-image-processing',
              name: 'Convolutions in Image Processing',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=8rrHTtUzyZA'
            },
            {
              id: 'understanding-convolution',
              name: 'Understanding “convolution” operations in CNN',
              type: 'article',
              url: 'https://medium.com/analytics-vidhya/convolution-operations-in-cnn-deep-learning-compter-vision-128906ece7d3'
            },
            {
              id: 'convolutional-neural-networks-explained',
              name: 'Convolutional Neural Networks, Explained',
              type: 'article',
              url: 'https://towardsdatascience.com/convolutional-neural-networks-explained-9cc5188c4939'
            },
          ]
        },
        {
          id: 'rnn',
          name: 'RNN',
          type: 'folder',
          children: [
            {
              id: 'rnn-made-with-ml',
              name: 'Recurrent Neural Networks (RNN) - Made With ML',
              type: 'article',
              url: 'https://madewithml.com/courses/foundations/recurrent-neural-networks/'
            },
            {
              id: 'rnn-effectiveness',
              name: 'The Unreasonable Effectiveness of Recurrent Neural Networks - Karpathy',
              type: 'article',
              url: 'https://karpathy.github.io/2015/05/21/rnn-effectiveness/'
            },
          ]
        },
        {
          id: 'llm',
          name: 'LLM',
          type: 'folder',
          children: [
            {
              id: 'umar-jamil',
              name: 'Umar Jamil',
              type: 'video',
              url: 'https://www.youtube.com/@umarjamilai'
            },
            {
              id: 'llm-from-scratch',
              name: 'Build a Large Language Model (From Scratch) - Sebastian Raschka',
              type: 'article',
              url: 'https://livebook.manning.com/book/build-a-large-language-model-from-scratch/title/'
            },
            {
              id: 'illustrated-gpt2',
              name: 'The Illustrated GPT-2 (Visualizing Transformer Language Models)',
              type: 'article',
              url: 'https://jalammar.github.io/illustrated-gpt2/'
            },
            {
              id: 'attention-is-all-you-need',
              name: 'Attention Is All You Need - Implementation',
              type: 'github',
              url: 'https://github.com/LvanderGoten/AttentionIsAllYouNeed?tab=readme-ov-file'
            },
            {
              id: 'linear-relationships-in-the-transformers-positional-encoding',
              name: 'Linear Relationships in the Transformer\'s Positional Encoding',
              type: 'article',
              url: 'https://blog.timodenk.com/linear-relationships-in-the-transformers-positional-encoding/'
            },
            {
              id: 'implement-vit',
              name: 'Implement and Train ViT From Scratch for Image Recognition - PyTorch',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=Vonyoz6Yt9c'
            },
            {
              id: 'smol-course',
              name: 'a smol course - huggingface',
              type: 'github',
              url: 'https://github.com/huggingface/smol-course'
            },
            {
              id: 'how-i-studied-llms-in-two-weeks',
              name: 'How I Studied LLMs in Two Weeks: A Comprehensive Roadmap',
              type: 'article',
              url: 'https://towardsdatascience.com/how-i-studied-llms-in-two-weeks-a-comprehensive-roadmap-e8ac19667a31'
            },
            {
              id: 'llm-visualization',
              name: 'LLM Visualization',
              type: 'article',
              url: 'https://bbycroft.net/llm'
            },
            {
              id: 'nlp-course',
              name: 'nlp course - huggingface',
              type: 'article',
              url: 'https://huggingface.co/learn/nlp-course/chapter1/1'
            },
            {
              id: 'zero-to-hero',
              name: 'Neural Networks: Zero to Hero',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ'
            },
          ]
        },
        {
          id: 'pytorch',
          name: 'PyTorch',
          type: 'folder',
          children: [
            {
              id: 'zero-to-mastery-pytorch',
              name: 'Zero to Mastery Learn PyTorch for Deep Learning - Daniel Bourke',
              type: 'article',
              url: 'https://www.learnpytorch.io/'
            },
            {
              id: 'zero-to-mastery-pytorch-video',
              name: 'Learn PyTorch for deep learning in a day. Literally. - Daniel Bourke',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=Z_ikDlimN6A'
            },
            {
              id: 'pytorch-internals',
              name: 'PyTorch internals - ezyang\'s blog',
              type: 'article',
              url: 'http://blog.ezyang.com/2019/05/pytorch-internals/'
            },
            {
              id: 'minitorch',
              name: 'MiniTorch',
              type: 'article',
              url: 'https://minitorch.github.io/'
            },
            {
              id: 'pytorch-is-dead',
              name: 'PyTorch is dead. Long live JAX. - Blog',
              type: 'article',
              url: 'https://neel04.github.io/my-website/blog/pytorch_rant/'
            },
            {
              id: 'inside-the-matrix',
              name: 'Inside the Matrix: Visualizing Matrix Multiplication, Attention and Beyond',
              type: 'article',
              url: 'https://pytorch.org/blog/inside-the-matrix/'
            },
          ],
        },
        {
          id: 'karpathy',
          name: 'Karpathy',
          type: 'folder',
          children: [
            {
              id: 'karpathy-blog',
              name: 'Blog',
              type: 'article',
              url: 'https://karpathy.github.io/'
            },
            {
              id: 'zero-to-hero',
              name: 'Neural Networks: Zero to Hero',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ'
            },
            {
              id: 'cs231n-2016',
              name: 'CS231n Winter 2016',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC'
            },
            {
              id: 'cs231n-2016-site',
              name: 'CS231n Winter 2016 - Course Site',
              type: 'article',
              url: 'https://cs231n.stanford.edu/2016/'
            },
            {
              id: 'eureka-labs-ai',
              name: 'Eureka Labs AI',
              type: 'github',
              url: 'https://github.com/EurekaLabsAI'
            },
            {
              id: 'karpathy-github',
              name: 'karpathy',
              type: 'github',
              url: 'https://github.com/karpathy'
            },
          ]
        },
        {
          id: '3b1b',
          name: '3Blue1Brown',
          type: 'folder',
          children: [
            {
              id: '3b1b-nn',
              name: 'Neural Networks',
              type: 'article',
              url: 'https://www.3blue1brown.com/topics/neural-networks'
            },
            {
              id: '3b1b-nn-yt',
              name: 'Neural Networks',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'
            },
            {
              id: 'neilsen-dl',
              name: 'Suggested by 3B1B - Neural Networks and Deep Learning',
              type: 'article',
              url: 'http://neuralnetworksanddeeplearning.com/'
            },
            {
              id: 'colah-dl',
              name: 'Suggested by 3B1B - Calculus on Computational Graphs: Backpropagation',
              type: 'article',
              url: 'https://colah.github.io/posts/2015-08-Backprop/'
            },
            {
              id: 'neural-networks-demystified',
              name: 'Suggested by 3B1B - Neural Networks Demystified',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLiaHhY2iBX9hdHaRr6b7XevZtgZRa1PoU'
            },
            {
              id: 'learning-to-see',
              name: 'Suggested by 3B1B - Learning To See',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLiaHhY2iBX9ihLasvE8BKnS2Xg8AhY6iV'
            },
          ]
        },
        {
          id: 'roadmap',
          name: 'Roadmap',
          type: 'article',
          url: 'https://aigents.co/learn/roadmaps/deep-learning-roadmap'
        },
        {
          id: 'deep-learning-for-tabular-data',
          name: 'A Short Chronology Of Deep Learning For Tabular Data',
          type: 'article',
          url: 'https://sebastianraschka.com/blog/2022/deep-learning-for-tabular-data.html'
        },
        {
          id: 'understanding-ai',
          name: 'Understanding AI - Lee Robinson',
          type: 'article',
          url: 'https://leerob.com/n/ai'
        },
      ]
    },
    {
      id: 'ml-da',
      name: 'Machine Learning & Data Analysis',
      type: 'folder',
      children: [
        {
          id: 'ml-courses',
          name: 'Courses',
          type: 'folder',
          children: [
            {
              id: 'mit-6-034',
              name: 'MIT 6.034 Artificial Intelligence, Fall 2010',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi'
            },
            {
              id: 'cornell-ml',
              name: 'Cornell CS4780 Machine Learning for Decision Making SP17',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLl8OlHZGYOQ7bkVbuRthEsaLr7bONzbXS'
            },
            {
              id: 'ml-in-c',
              name: 'Machine Learning in C',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLpM-Dvs8t0VZPZKggcql-MmjaBdZKeDMw'
            },
            {
              id: 'machine-learning-coursera',
              name: 'Andrew Ng\'s Machine Learning Collection',
              type: 'article',
              url: 'https://www.coursera.org/collections/machine-learning'
            },
            {
              id: 'stanford-cs229',
              name: 'Stanford CS229: Machine Learning Full Course taught by Andrew Ng | Autumn 2018',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU'
            },
            {
              id: 'applied-ml-2020',
              name: 'Applied Machine Learning 2020 by Andreas Mueller',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PL_pVmAaAnxIRnSw6wiCpSvshFyCREZmlM'
            },
            {
              id: 'ml-notebook',
              name: 'Machine Learning Notebook',
              type: 'article',
              url: 'https://calvinfeng.gitbook.io/machine-learning-notebook'
            },
            {
              id: 'made-with-ml',
              name: 'Made With ML',
              type: 'article',
              url: 'https://madewithml.com/#course'
            },
          ]
        },
        {
          id: 'ml-books',
          name: 'Books',
          type: 'folder',
          children: [
            {
              id: 'python-for-data-analysis',
              name: 'Python for Data Analysis',
              type: 'article',
              url: 'https://wesmckinney.com/book/'
            },
           
          ]
        },
        {
          id: 'ml-ops',
          name: 'ML Ops',
          type: 'folder',
          children: [
            {
              id: 'mlops-basics',
              name: 'MLOps Basics',
              type: 'github',
              url: 'https://github.com/graviraja/MLOps-Basics'
            },
            {
              id: 'mlops-for-beginners',
              name: 'How to Learn MLOps in 2024 [Courses, Books, and Other Resources]',
              type: 'article',
              url: 'https://neptune.ai/blog/how-to-learn-mlops'
            },
          ]
        },
        {
          id: 'svm',
          name: 'SVM',
          type: 'folder',
          children: [
            {
              id: 'mit-svm',
              name: 'MIT - Learning: Support Vector Machines',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=_PwhiWxHK8o'
            },
            {
              id: 'dual-formulation',
              name: 'Derive the Dual Formulation for Support Vector Machines',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=4TIbsTa3r24&t=5s'
            },
            {
              id: 'compphysics-svm',
              name: 'Support Vector Machines - compphysics',
              type: 'article',
              url: 'https://compphysics.github.io/ComputationalPhysics2/doc/LectureNotes/_build/html/supportvectormachines.html'
            },
            {
              id: 'cornell-svm',
              name: 'Machine Learning Lecture 14 "(Linear) Support Vector Machines" -Cornell CS4780 SP17',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=xpHQ6UhMlx4&list=PLl8OlHZGYOQ7bkVbuRthEsaLr7bONzbXS'
            },
            {
              id: 'svm-optimization',
              name: 'Support Vector Machines, Dual Formulation, Quadratic Programming & Sequential Minimal Optimization',
              type: 'article',
              url: 'https://towardsdatascience.com/support-vector-machines-dual-formulation-quadratic-programming-sequential-minimal-optimization-57f4387ce4dd#d326'
            },
            {
              id: 'svmjs-demo',
              name: 'Support Vector Machine in Javascript, Demo - Karpathy',
              type: 'article',
              url: 'https://cs.stanford.edu/~karpathy/svmjs/demo/'
            },
            {
              id: 'svm-demo',
              name: 'Interactive demo of Support Vector Machines (SVM)',
              type: 'article',
              url: 'https://greitemann.dev/svm-demo'
            },
          ]
        },
        {
          id: 'cross-entropy',
          name: 'Cross Entropy',
          type: 'folder',
          children: [
            {
              id: 'cross-entropy-and-log-likelihood',
              name: 'Cross Entropy and Log Likelihood',
              type: 'article',
              url: 'https://www.awebb.info/probability/2017/05/18/cross-entropy-and-log-likelihood.html'
            },
            {
              id: 'confused-me-about-cross-entropy',
              name: 'Things that confused me about cross-entropy',
              type: 'article',
              url: 'https://chris-said.io/2020/12/26/two-things-that-confused-me-about-cross-entropy/'
            },
            {
              id: 'understanding-binary-cross-entropy-log-loss',
              name: 'Understanding binary cross-entropy / log loss: a visual explanation',
              type: 'article',
              url: 'https://towardsdatascience.com/understanding-binary-cross-entropy-log-loss-a-visual-explanation-a3ac6025181a'
            },
          ]
        },
        {
          id: 'feature-engineering',
          name: 'Feature Engineering',
          type: 'folder',
          children: [
            {
              id: 'feature-engineering-kaggle',
              name: 'Feature Engineering - Kaggle',
              type: 'article',
              url: 'https://www.kaggle.com/learn/feature-engineering'
            },
            {
              id: 'reference-guide-to-fe',
              name: 'A Reference Guide to Feature Engineering Methods',
              type: 'article',
              url: 'https://www.kaggle.com/code/prashant111/a-reference-guide-to-feature-engineering-methods'
            },
            {
              id: 'advanced-feature-engineering',
              name: 'Advanced Feature Engineering',
              type: 'article',
              url: 'https://www.kaggle.com/code/seneralkan/advanced-feature-engineering'
            },
            {
              id: 'fe-zero-to-hero',
              name: 'Complete Guide to Feature Engineering: Zero to Hero',
              type: 'article',
              url: 'https://www.analyticsvidhya.com/blog/2021/09/complete-guide-to-feature-engineering-zero-to-hero/'
            },
            
          ]
        },
        {
          id: 'deep-ml',
          name: 'ML Code Challenges',
          type: 'article',
          url: 'https://www.deep-ml.com/'
        },
        {
          id: 'uc-ml',
          name: 'UC Irvine Machine Learning Repository',
          type: 'article',
          url: 'https://archive.ics.uci.edu/'
        },
      ]
    },
    {
      id: 'reinforcement-learning',
      name: 'Reinforcement Learning',
      type: 'folder',
      children: [
        {
          id: 'reinforcement-learning-sutton',
          name: 'Reinforcement Learning: An Introduction - Book - Sutton',
          type: 'document',
          url: 'https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf'
        },
        {
          id: 'deepmind-rl-course',
          name: 'DeepMind x UCL | Introduction to Reinforcement Learning 2015',
          type: 'video',
          url: 'https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ'
        },
        {
          id: 'spinning-up-rl',
          name: 'Spinning Up - OpenAI',
          type: 'github',
          url: 'https://github.com/openai/spinningup'
        },
        {
          id: 'algorithms-for-rl',
          name: 'Algorithms for Reinforcement Learning - Book',
          type: 'document',
          url: 'https://sites.ualberta.ca/~szepesva/papers/RLAlgsInMDPs-lecture.pdf'
        },
        {
          id: 'cs294-rl',
          name: 'CS 294: Deep Reinforcement Learning, Spring 2017',
          type: 'article',
          url: 'https://rll.berkeley.edu/deeprlcoursesp17/'
        },
        {
          id: 'reinforcement-learning-overview-kpm',
          name: 'Reinforcement Learning: An Overview - Kevin P. Murphy',
          type: 'document',
          url: 'https://arxiv.org/pdf/2412.05265'
        },
        {
          id: 'huggingface-deep-rl-course',
          name: 'Hugging Face - Deep RL Course',
          type: 'article',
          url: 'https://huggingface.co/learn/deep-rl-course/unit0/introduction'
        },
      ]
    },
    
    {
      id: 'gpu',
      name: 'GPU',
      type: 'folder',
      children: [
        {
          id: 'parallel-programming',
          name: 'Parallel Programming',
          type: 'folder',
          children: [
            {
              id: 'is-parallel-programming-hard',
              name: 'Is Parallel Programming Hard, And, If So, What Can You Do About It',
              type: 'document',
              url: 'https://mirrors.edge.kernel.org/pub/linux/kernel/people/paulmck/perfbook/perfbook.2023.06.11a.pdf'
            },
            {
              id: 'intro-to-parallel-programming',
              name: 'Intro to Parallel Programming',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2'
            },
            {
              id: 'programming-parallel-computers',
              name: 'Programming Parallel Computers',
              type: 'article',
              url: 'https://ppc.cs.aalto.fi/'
            },
            {
              id: 'python-parallel-computing',
              name: 'Python Parallel Computing',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PL30NBs02RsiUbmXVPDo56APsU0xa6gfL2'
            },
            {
              id: 'nhr-fau-parallel-programming',
              name: 'NHR@FAU - Parallel Programming',
              type: 'video',
              url: 'https://www.youtube.com/playlist?list=PLxVedhmuwLq2Ie88ODuZufCGorawPO1AP'
            },
          ]
        },

        {
          id: 'cuda',
          name: 'CUDA',
          type: 'folder',
          children: [
            {
              id: 'cuda-siboehm',
              name: 'How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance: a Worklog',
              type: 'article',
              url: 'https://siboehm.com/articles/22/CUDA-MMM'
            },
            {
              id: 'cuda-mode',
              name: 'GPU(CUDA) MODE',
              type: 'video',
              url: 'https://www.youtube.com/@GPUMODE'
            },
            {
              id: 'pmpp',
              name: 'Programming Massively Parallel Processors',
              type: 'document',
              url: 'https://github.com/h3ct0rjs/HighPerformanceComputing/blob/master/BookRef/Programming%20Massively%20Parallel%20Processors.pdf'
            },
            {
              id: 'cuda-tutorial',
              name: 'CUDA Toolkit Documentation',
              type: 'article',
              url: 'https://docs.nvidia.com/cuda/'
            },
            {
              id: 'cuda-cpp-guide',
              name: 'CUDA C++ Programming Guide',
              type: 'document',
              url: 'https://docs.nvidia.com/cuda/pdf/CUDA_C_Programming_Guide.pdf'
            },
          ]
        },
        {
          id: 'horace-he',
          name: 'Horace He - Making Deep Learning Go Brrrr',
          type: 'article',
          url: 'https://horace.io/brrr_intro.html'
        }
      ]
    },
    {
      id: 'tools-unsorted',
      name: 'Tools and Unsorted',
      type: 'folder',
      children: [
        {
          id: 'netron',
          name: 'Netron - Deep Learning Model Inspector',
          type: 'article',
          url: 'https://netron.app/'
        },
        {
          id: 'advanced-numpy',
          name: 'Advanced NumPy',
          type: 'article',
          url: 'https://wesmckinney.com/book/advanced-numpy'
        },
        {
          id: 'stride-guide',
          name: 'An Illustrated Guide to Shape and Strides',
          type: 'article',
          url: 'https://ajcr.net/stride-guide-part-1/'
        },
        {
          id: 'smolorg',
          name: 'smolorg - maharshi',
          type: 'github',
          url: 'https://github.com/smolorg'
        },
        {
          id: 'matrix-calculus',
          name: 'The Matrix Calculus You Need For Deep Learning',
          type: 'article',
          url: 'https://explained.ai/matrix-calculus/'
        },
        {
          id: 'fast-mmm',
          name: 'Fast Multidimensional Matrix Multiplication on CPU from Scratch',
          type: 'article',
          url: 'https://siboehm.com/articles/22/Fast-MMM-on-CPU'
        },
        {
          id: 'computer-vision-papers',
          name: 'Computer Vision Papers',
          type: 'article',
          url: 'https://paperswithcode.com/area/computer-vision'
        },
        {
          id: 'ml-stash',
          name: 'ml stash',
          type: 'article',
          url: 'https://arc.net/e/D242E263-31FD-4CF9-A2D5-B67519C049AF'
        },
        {
          id: 'matrix-visualizer',
          name: 'Matrix Visualizer',
          type: 'article',
          url: 'https://shad.io/MatVis/'
        },
        {
          id: 'matrix-cookbook',
          name: 'The Matrix Cookbook',
          type: 'article',
          url: 'https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf'
        },
      ]
    }
  ]
}
