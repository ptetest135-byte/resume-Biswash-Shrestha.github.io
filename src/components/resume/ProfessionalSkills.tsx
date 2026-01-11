import { resumeData } from "@/data/resumeData";
import { MessageSquare, Zap, Users } from "lucide-react";

const ProfessionalSkills = () => {
  const skillCategories = [
    {
      title: "Communication",
      icon: <MessageSquare className="w-6 h-6" />,
      skills: resumeData.professionalSkills.communication,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Personal Effectiveness",
      icon: <Zap className="w-6 h-6" />,
      skills: resumeData.professionalSkills.personalEffectiveness,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Interpersonal",
      icon: <Users className="w-6 h-6" />,
      skills: resumeData.professionalSkills.interpersonal,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* IT-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core competencies that drive effective IT support and team collaboration
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-6 shadow-lg`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-sm leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
