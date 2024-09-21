import { PlanCardProps } from "../components/plan-card";

export const plans: PlanCardProps[] = [
   {
      title: "BASIC",
      price: "Free",
      features: [
         { text: "Nam sollicitudin dignissim" },
         { text: "Cras convallis lacus" },
         { text: "Quisque ut metus" },
      ],
      ctaText: "CHOOSE PLAN",
   },
   {
      title: "BEST VALUE",
      price: "$24",
      features: [
         { text: "Nam sollicitudin dignissim" },
         { text: "Cras convallis lacus" },
         { text: "Quisque ut metus" },
      ],
      isBestValue: true,
      ctaText: "CHOOSE PLAN",
   },
   {
      title: "PRO",
      price: "$54",
      features: [
         { text: "Nam sollicitudin dignissim" },
         { text: "Cras convallis lacus" },
         { text: "Quisque ut metus" },
      ],
      ctaText: "CHOOSE PLAN",
   },
   {
      title: "ENTERPRISE",
      price: "$90",
      features: [
         { text: "Nam sollicitudin dignissim" },
         { text: "Cras convallis lacus" },
         { text: "Quisque ut metus" },
      ],
      ctaText: "CHOOSE PLAN",
   },
];
