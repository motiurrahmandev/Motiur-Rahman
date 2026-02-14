import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

function InfoCard() {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'rmdmotiur144@gmail.com',
      link: 'mailto:rmdmotiur144@gmail.com',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Rajshahi, Bangladesh',
    },
    {
      icon: <Clock size={20} />,
      label: 'Timezone',
      value: 'GMT+6',
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', link: '#' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', link: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', link: '#' },
    { icon: <Dribbble size={20} />, label: 'Dribbble', link: '#' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glass-panel rounded-xl p-8 flex flex-col gap-8 h-full border border-white/5"
    >
      <div>
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">
          Contact Details
        </motion.h3>
        <div className="flex flex-col gap-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 group"
            >
              <div className="p-3 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                {item.link ? (
                  <a
                    className="text-lg text-white font-medium hover:text-primary transition-colors block"
                    href={item.link}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg text-white font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <motion.p variants={itemVariants} className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
          Connect Socially
        </motion.p>
        <div className="flex gap-3 flex-wrap">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 text-slate-400 hover:text-primary transition-all duration-300"
              href={social.link}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default InfoCard;
