import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a default user
  const user = await prisma.user.upsert({
    where: { email: 'seu.email@exemplo.com' },
    update: {},
    create: {
      email: 'seu.email@exemplo.com',
      name: 'Seu Nome',
      bio: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação.',
      website: 'https://seuportfolio.com',
      github: 'https://github.com/seuusuario',
      linkedin: 'https://linkedin.com/in/seuusuario',
    },
  });

  // Create some skills
  const skills = await Promise.all([
    prisma.skill.create({
      data: {
        name: 'React',
        category: 'Frontend',
        level: 5,
        userId: user.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: 'Next.js',
        category: 'Frontend',
        level: 4,
        userId: user.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: 'TypeScript',
        category: 'Language',
        level: 5,
        userId: user.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: 'Node.js',
        category: 'Backend',
        level: 4,
        userId: user.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: 'Prisma',
        category: 'Database',
        level: 4,
        userId: user.id,
      },
    }),
    prisma.skill.create({
      data: {
        name: 'PostgreSQL',
        category: 'Database',
        level: 4,
        userId: user.id,
      },
    }),
  ]);

  // Create some tags
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: 'Web Development', color: '#3B82F6' } }),
    prisma.tag.create({ data: { name: 'Full Stack', color: '#10B981' } }),
    prisma.tag.create({ data: { name: 'React', color: '#06B6D4' } }),
    prisma.tag.create({ data: { name: 'Next.js', color: '#8B5CF6' } }),
  ]);

  // Create a sample project
  const project = await prisma.project.create({
    data: {
      title: 'Portfolio Website',
      description: 'Um website de portfolio moderno construído com Next.js, TypeScript e Prisma.',
      content: `# Portfolio Website

Este é um projeto de portfolio moderno que demonstra minhas habilidades em desenvolvimento full stack.

## Tecnologias Utilizadas

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express, Prisma ORM
- **Database:** PostgreSQL
- **Containerização:** Docker, Docker Compose
- **Ferramentas:** Nx Monorepo, ESLint, Prettier

## Funcionalidades

- Design responsivo e moderno
- Tema claro/escuro
- Gestão de projetos
- Sistema de skills e experiências
- API RESTful
- Containerização completa`,
      featured: true,
      published: true,
      userId: user.id,
    },
  });

  // Connect project with tags and technologies
  await Promise.all([
    prisma.projectTag.create({
      data: { projectId: project.id, tagId: tags[0].id },
    }),
    prisma.projectTag.create({
      data: { projectId: project.id, tagId: tags[1].id },
    }),
    prisma.projectTechnology.create({
      data: { projectId: project.id, skillId: skills[0].id }, // React
    }),
    prisma.projectTechnology.create({
      data: { projectId: project.id, skillId: skills[1].id }, // Next.js
    }),
    prisma.projectTechnology.create({
      data: { projectId: project.id, skillId: skills[2].id }, // TypeScript
    }),
  ]);

  // Create an experience
  await prisma.experience.create({
    data: {
      company: 'Empresa Exemplo',
      position: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento de aplicações web modernas usando React, Next.js, Node.js e PostgreSQL.',
      location: 'Remote',
      startDate: new Date('2023-01-01'),
      current: true,
      userId: user.id,
    },
  });

  console.log('✅ Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });