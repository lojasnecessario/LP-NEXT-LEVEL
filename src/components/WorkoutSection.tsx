import { Dumbbell, Target, Zap, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const WorkoutSection = () => (
    <>
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-emerald-600/5 blur-[100px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Não consegue fazer <span className="text-emerald-400">seu treino?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        O next-level faz seus treinos de acordo com o seu objetivo e adapta sua rotina para máxima constância.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass p-8 rounded-[2rem] border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                            <Dumbbell className="w-7 h-7 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Pronto para qualquer esporte</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Seja musculação, corrida, crossfit ou qualquer outro esporte, a I.A está pronta para fazer o seu treino ideal.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass p-8 rounded-[2rem] border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                            <Target className="w-7 h-7 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Alinhado à sua Meta</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Ganho de massa, perda de peso ou condicionamento. Sua rotina esportiva é mapeada e milimetricamente alinhada aos seus desafios semanais.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass p-8 rounded-[2rem] border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                            <Zap className="w-7 h-7 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Evolução Gamificada</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Ganhe XP a cada treino concluído e observe sua evolução na plataforma. O tédio foge, a dopamina aumenta e seu foco se torna inquebrável.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    </>
);

export default WorkoutSection;
