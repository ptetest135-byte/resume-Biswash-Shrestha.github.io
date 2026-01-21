import { resumeData } from "@/data/resumeData";
import { FolderGit2, CheckCircle2, Clock } from "lucide-react";

const Projects = () => {
    if (!resumeData.projects) return null;

    return (
        <section className="py-24 bg-background/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Featured Projects
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="space-y-16">
                        {/* Current Projects */}
                        {resumeData.projects.current && resumeData.projects.current.length > 0 && (
                            <div className="animate-fade-in-up">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Currently Working On</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {resumeData.projects.current.map((project, index) => (
                                        <div
                                            key={index}
                                            className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    {project.type}
                                                </div>
                                                <FolderGit2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            {project.details && (
                                                <p className="text-sm text-muted-foreground/80 italic border-l-2 border-primary/20 pl-3">
                                                    {project.details}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Completed Projects */}
                        {resumeData.projects.completed && resumeData.projects.completed.length > 0 && (
                            <div className="animate-fade-in-up delay-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-green-500/10 rounded-lg">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Completed Projects</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {resumeData.projects.completed.map((project, index) => (
                                        <div
                                            key={index}
                                            className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="inline-flex px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                                                    {project.type}
                                                </div>
                                                <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
                                            </div>
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">{project.title}</h4>
                                            <p className="text-muted-foreground">{project.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
