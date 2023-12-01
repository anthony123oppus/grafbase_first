import { g, auth, config } from '@grafbase/sdk'


const User = g.model('User', {
  name:g.string(),
  email:g.email(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedIn:g.url().optional(),
  projects:g.relation(() => Project).list().optional(),
})


const Project = g.model('Project', {
  title:g.string(),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(() => User)
})

export default config({
  schema: g,

})
