"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../../data/data';
import Hero from '../_components/Hero';
import ProblemAndSolution from '../_components/ProblemAndSolution';
import TechStack from '../_components/TechStack';
import ProjectGelary from '../_components/ProjectGelary';

function SingleProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id)) || PROJECTS[0];

  return (
    <div className="bg-background-dark min-h-screen py-12 relative">
      <Hero project={project} />
      <ProblemAndSolution project={project} />
      <TechStack project={project} />
      <ProjectGelary project={project} />
    </div>
  );
}

export default SingleProjectPage;