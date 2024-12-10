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
          id: 'architectures',
          name: 'Neural Architectures',
          type: 'folder',
          children: [
            {
              id: 'transformers',
              name: 'Transformers',
              type: 'folder',
              children: [
                {
                  id: 'attention-paper',
                  name: 'Attention Is All You Need',
                  type: 'article',
                  url: 'https://arxiv.org/abs/1706.03762'
                },
                {
                  id: 'transformer-impl',
                  name: 'Transformer Implementation',
                  type: 'github',
                  url: 'https://github.com/huggingface/transformers'
                },
                {
                  id: 'transformer-tutorials',
                  name: 'Advanced Topics',
                  type: 'folder',
                  children: [
                    {
                      id: 'self-attention',
                      name: 'Self-Attention Mechanism',
                      type: 'video',
                      url: 'https://www.youtube.com/watch?v=yGTUuEx3GkA'
                    },
                    {
                      id: 'positional-encoding',
                      name: 'Positional Encoding',
                      type: 'document',
                      url: 'https://kazemnejad.com/blog/transformer_architecture_positional_encoding/'
                    }
                  ]
                }
              ]
            },
            {
              id: 'cnns',
              name: 'Convolutional Networks',
              type: 'folder',
              children: [
                {
                  id: 'cnn-architectures',
                  name: 'CNN Architectures',
                  type: 'folder',
                  children: [
                    {
                      id: 'resnet',
                      name: 'ResNet',
                      type: 'article',
                      url: 'https://arxiv.org/abs/1512.03385'
                    },
                    {
                      id: 'vision-transformer',
                      name: 'Vision Transformer',
                      type: 'article',
                      url: 'https://arxiv.org/abs/2010.11929'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'applications',
          name: 'Applications',
          type: 'folder',
          children: [
            {
              id: 'computer-vision',
              name: 'Computer Vision',
              type: 'folder',
              children: [
                {
                  id: 'object-detection',
                  name: 'Object Detection',
                  type: 'folder',
                  children: [
                    {
                      id: 'yolo',
                      name: 'YOLO',
                      type: 'github',
                      url: 'https://github.com/ultralytics/yolov5'
                    },
                    {
                      id: 'faster-rcnn',
                      name: 'Faster R-CNN',
                      type: 'article',
                      url: 'https://arxiv.org/abs/1506.01497'
                    }
                  ]
                }
              ]
            },
            {
              id: 'nlp',
              name: 'Natural Language Processing',
              type: 'folder',
              children: [
                {
                  id: 'language-models',
                  name: 'Language Models',
                  type: 'folder',
                  children: [
                    {
                      id: 'gpt',
                      name: 'GPT Architecture',
                      type: 'document',
                      url: 'https://openai.com/research/gpt-4'
                    },
                    {
                      id: 'bert',
                      name: 'BERT',
                      type: 'article',
                      url: 'https://arxiv.org/abs/1810.04805'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
