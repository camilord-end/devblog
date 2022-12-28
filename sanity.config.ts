import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// @ts-ignore
const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// @ts-ignore
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  name: 'Camilord_Content_Studio',
  title: 'Camilord Devblog',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
})
