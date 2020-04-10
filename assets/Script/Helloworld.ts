const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property({
        type: cc.Node
    })
    myParticle: cc.Node = null;

    start () {
        cc.tween(this.myParticle)
            .repeatForever(
                cc.tween()
                    .set({angle: 0})
                    .to(3, {angle: 360})
                )
            .start()
        for (let i = 0; i < this.myParticle.childrenCount; i++) {
            cc.tween(this.myParticle.children[i])
                .repeatForever(
                    cc.tween()
                        .set({position: this.myParticle.children[i].position})
                        .to(2.5, {position: cc.v2(0, 0)})
                )
                .start()
        }
    }
}
