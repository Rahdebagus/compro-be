import { z } from 'zod'
import { generateRandomString } from '@/utils/functions'

export const projectDefaultValueForm = {
  slug: generateRandomString(10),
  title: '',
  description: '',
  image: '',
  isFeatured: false,
  isShow: false,
  stacks: [],
  content: '',
  linkDemo: '',
  linkGithub: '',
  updatedAt: new Date(),
  createdAt: new Date()
}

export const stackOptions = [
  // 3D Software
  'Blender',
  'Cinema 4D',
  'Maya',
  '3ds Max',
  'SketchUp',
  'ZBrush',

  // Adobe Creative Suite
  'Photoshop',
  'Illustrator',
  'After Effects',
  'Premiere Pro',
  'InDesign',
  'Lightroom',
  'Adobe XD',

  // Game Engines & Real-time 3D
  'Unity',
  'Unreal Engine',

  // Texturing & Materials
  'Substance Painter',
  'Substance Designer',

  // UI/UX & Design Tools
  'Figma',
  'Canva',

  // Open Source Alternatives
  'GIMP',
  'Inkscape',

  // Other Professional Tools
  'Affinity Designer',
  'Affinity Photo',
  'AutoCAD',
  '3D Printing'
].map(function (a) {
  return {
    id: a,
    label: a,
    value: a
  }
});

export type IProject = {
  id?: string
  title: string
  slug: string
  description: string
  image: string
  linkDemo: string
  linkGithub: string
  stacks: string[]
  isShow: boolean
  content: string
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date | null
}

export type IProjectPayloadCreate = {
  title: string
  slug: string
  description: string
  image: string
  linkDemo: string
  linkGithub: string
  stacks: string[]
  isShow: boolean
  content: string
  isFeatured: boolean
}

export type IProjectPayloadUpdate = { id: string } & IProjectPayloadCreate

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  isFeatured: z.boolean(),
  isShow: z.boolean(),
  slug: z.string().min(1),
  content: z.string().min(1),
  linkDemo: z.string().min(1),
  linkGithub: z.string().min(1),
  stacks: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.'
  })
})
